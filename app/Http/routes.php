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

post('upload-image', 'GalleryController@uploadImage');

Route::get('get-invitations', 'InvitationController@getInvitations');
Route::post('auth', 'UserController@checkAuth');
Route::resource('user', 'UserController');
Route::resource('gallery', 'GalleryController');

post('delete-single-image', 'GalleryController@deleteSingleImage');
