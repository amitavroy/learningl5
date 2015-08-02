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
    return view('home');
});

// User related pages
Route::get('user', 'UserController@getLoginPage');
Route::post('user/do-login', 'UserController@doLogin');
Route::get('user/dashboard', 'UserController@getUserDashboard');
Route::get('user/change-password', 'UserController@getChangeUserPassword');
Route::post('user/save-new-password', 'UserController@saveNewPassword');
Route::get('user/profile', 'UserController@getUserProfileEditPage');
Route::post('user/profile/save', 'UserController@saveUserProfileData');
Route::get('user/logout', 'UserController@getUserLogout');

// Places
Route::get('places/my-places', 'PlacesController@getMyPlacesList');
Route::get('places/map', 'PlacesController@getMapIframe');
Route::post('geo_location', 'PlacesController@saveUserLocation');
Route::get('api/my-places', 'PlacesController@getMyPlaceJSON');

// Gallery and photo view
Route::get('gallery/list', 'GalleryController@viewGalleryList');
Route::post('gallery/save', 'GalleryController@saveGallery');
Route::get('gallery/view/{id}', 'GalleryController@viewGalleryPics');

Route::post('image/do-upload', 'GalleryController@doImageUpload');