<?php

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

use Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return view('master');
});

post('upload-image', 'GalleryController@uploadImage');

Route::post('auth', 'UserController@checkAuth');
Route::resource('user', 'UserController');
Route::resource('gallery', 'GalleryController');

get('test', function () {
    $s3 = Storage::disk('s3');
    $s3->put('myfile.txt', 'This is a dummy file with some content', 'public');
});
