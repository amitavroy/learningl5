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

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::get('save-post', function()
{
  $post = new App\Post;
  
  $post->title = 'This is a random title';
  
  $post->body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis nisi justo, non tincidunt ex viverra vel. Ut blandit justo at facilisis dapibus. Nam fringilla bibendum diam, sit amet laoreet purus porttitor quis.';
  
  $post->save([
    'user' => Auth::user(),
    'post' => $post
    ]);
});