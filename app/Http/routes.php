<?php

use App\File;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

Route::get('/', function () {
    return view('master');
});

post('upload-image', 'GalleryController@uploadImage');

Route::post('auth', 'UserController@checkAuth');
Route::resource('user', 'UserController');
Route::resource('gallery', 'GalleryController');

post('test', function (Request $request) {
    // $s3 = Storage::disk('s3');
    // $file = $request->file('file');
    // $extension = $request->file('file')->guessExtension();
    // $image = Image::make($file);
    // $image_thumb = $image->fit(200);
    // $image_thumb->encode($extension);

    // $s3->put(uniqid() . '.' . $extension, (string) $image_thumb, 'public');
    $fileObj = new File;
    $fileUpload = $fileObj->uploadThumbAndMainImage($request);
    return response($fileUpload, 201);
});
