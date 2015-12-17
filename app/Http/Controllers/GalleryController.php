<?php

namespace App\Http\Controllers;

use App\File;
use App\Gallery;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Gallery::where('user_id', Auth::user()->id)->with('user')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validaor = Validator::make($request->all(), [
            'name' => 'required|min:3',
        ]);

        if ($validaor->fails()) {
            return response($validaor->errors()->all(), 422);
        }

        $gallery = Gallery::create([
            'name' => $request->input('name'),
            'user_id' => Auth::user()->id,
        ]);

        return response($gallery, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $galleryObj = new Gallery;
        return $galleryObj->getSingleGallery($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function uploadImage(Request $request)
    {
        $galleryId = $request->input('galleryId');

        // check if the file exist
        if (!$request->hasFile('file')) {
            return response('No file sent.', 400);
        }

        // check if the file is valid file
        if (!$request->file('file')->isValid()) {
            return response('File is not valid.', 400);
        }

        // validation rules
        $validator = Validator::make($request->all(), [
            'galleryId' => 'required|integer',
            'file' => 'required|mimes:jpeg,jpg,png|max:8000',
        ]);

        // if validation fails
        if ($validator->fails()) {
            return response('There are errors in the form data', 400);
        }

        $fileObj = new File;
        $fileUpload = $fileObj->uploadThumbAndMainImage($request);
        return response($fileUpload, 201);
    }

    public function deleteSingleImage(Request $request)
    {
        $imageId = $request->input('id');

        try {
            DB::beginTransaction();

            // delete the file from the files table
            $file = File::findOrFail($imageId);
            $file->delete();

            // remove the entry from the gallery image pivot table
            DB::table('gallery_images')->where('file_id', $file->id)->delete();

            // delete the actual image from S3
            $fileName = str_replace(env('S3_URL'), '', $file->file_path);
            $fileName = explode('/', $fileName);

            $mainImage = "gallery_{$request->input('galleryId')}/main/" . $fileName[count($fileName) - 1];
            $thumbImage = "gallery_{$request->input('galleryId')}/thumb/" . $fileName[count($fileName) - 1];
            $mediummage = "gallery_{$request->input('galleryId')}/medium/" . $fileName[count($fileName) - 1];

            $s3 = Storage::disk('s3');
            $s3->delete($mainImage);
            $s3->delete($thumbImage);
            $s3->delete($mediummage);

            DB::commit();
        } catch (\PDOException $e) {
            DB::rollBack();
        }

        return response($this->show($request->input('galleryId')), 200);
    }
}
