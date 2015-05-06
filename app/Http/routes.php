<?php

App::singleton('oauth2', function() {
    
    $storage = new OAuth2\Storage\Pdo(array(
        'dsn' => 'mysql:dbname=learningl5;host=localhost', 
        'username' => 'root', 
        'password' => 'password'));
    
    $server = new OAuth2\Server($storage);
    
    $server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
    $server->addGrantType(new OAuth2\GrantType\UserCredentials($storage));
    
    return $server;
});

Route::post('oauth/token', function()
{
    $bridgedRequest  = OAuth2\HttpFoundationBridge\Request::createFromRequest(Request::instance());
    $bridgedResponse = new OAuth2\HttpFoundationBridge\Response();
    
    $bridgedResponse = App::make('oauth2')->handleTokenRequest($bridgedRequest, $bridgedResponse);
    
    return $bridgedResponse;
});

/*Global routes*/
Route::get('/', 'WelcomeController@index');
Route::get('get-token', 'GlobalController@getCSRFToken');

/*Posts*/
Route::resource('post', 'PostController');
Route::group(['prefix' => 'post'], function() {
//    Route::get('list', 'PostController@getAllPosts');
});