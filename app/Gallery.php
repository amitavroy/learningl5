<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Gallery extends Model
{
    /**
     * Fields which can be mass assigned
     * @var array
     */
    protected $fillable = ['name', 'user_id'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getSingleGallery($id)
    {
        $gallery = Gallery::with('user')->where('id', $id)->first();

        $gallery->images = $this->getGalleryImageUrls($id, $gallery->id);

        return $gallery;
    }

    private function getGalleryImageUrls($id, $galleryId)
    {
        $files = DB::table('gallery_images')
            ->where('gallery_id', $id)
            ->join('files', 'files.id', '=', 'gallery_images.file_id')
            ->get();

        $finalData = [];
        foreach ($files as $key => $file) {
            $finalData[$key] = [
                'file_id' => $file->id,
                'thumbUrl' => env('S3_URL') . "gallery_{$galleryId}/thumb/" . $file->file_name,
                'url' => env('S3_URL') . "gallery_{$galleryId}/medium/" . $file->file_name,
                'main' => env('S3_URL') . "gallery_{$galleryId}/main/" . $file->file_name,
            ];
        }

        return $finalData;
    }
}
