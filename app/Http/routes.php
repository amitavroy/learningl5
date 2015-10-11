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

Route::get('/', function () {
    return view('master');
});

Route::post('auth', 'UserController@checkAuth');
Route::resource('user', 'UserController');
Route::resource('gallery', 'GalleryController');
Route::post('save/file', function () {
    return 123;
});
