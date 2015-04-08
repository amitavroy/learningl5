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

/*Global routes*/
Route::get('/', 'WelcomeController@index');
Route::get('get-token', 'GlobalController@getCSRFToken');

/*Posts*/
Route::resource('post', 'PostController');
Route::group(['prefix' => 'post'], function() {
//    Route::get('list', 'PostController@getAllPosts');
});