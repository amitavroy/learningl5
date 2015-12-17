<?php

namespace App;

use App\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class File extends Model
{
    /**
     * Define the columns which can be mass assigned
     *
     * @var array
     */
    protected $fillable = ['file_name', 'mime_type', 'file_size', 'file_path', 'status', 'type'];

    public function uploadThumbAndMainImage(Request $request)
    {
        // get basic info
        $s3 = Storage::disk('s3');
        $file = $request->file('file');
        $extension = $request->file('file')->guessExtension();
        $filename = uniqid() . '.' . $extension;
        $mimeType = $request->file('file')->getClientMimeType();
        $fileSize = $request->file('file')->getClientSize();
        $image = Image::make($file);
        $galleryId = $request->input('galleryId');

        // generate the thumb and medium image
        $imageThumb = Image::make($file)->fit(320)->crop(320, 240, 0, 0);
        $imageThumb->encode($extension);

        $imageMedium = Image::make($file)->resize(800, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $imageMedium->encode($extension);

        $image->encode($extension);

        // upload image to S3
        $s3->put("gallery_{$galleryId}/main/" . $filename, (string) $image, 'public');
        $s3->put("gallery_{$galleryId}/medium/" . $filename, (string) $imageMedium, 'public');
        $s3->put("gallery_{$galleryId}/thumb/" . $filename, (string) $imageThumb, 'public');

        // make image entry to DB
        $file = File::create([
            'file_name' => $filename,
            'mime_type' => $mimeType,
            'file_size' => $fileSize,
            'file_path' => env('S3_URL') . "gallery_{$galleryId}/main/" . $filename,
            'type' => 's3',
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => $galleryId,
            'file_id' => $file->id,
        ]);

        $fileImg = File::find($file->id);
        $fileImg->status = 1;
        $fileImg->save();

        return [
            'file' => $fileImg,
            'file_id' => $file->id,
            'thumbUrl' => env('S3_URL') . "gallery_{$galleryId}/thumb/" . $filename,
            'url' => env('S3_URL') . "gallery_{$galleryId}/medium/" . $filename,
            'main' => env('S3_URL') . "gallery_{$galleryId}/main/" . $filename,
        ];
    }
}
