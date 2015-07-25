<?php

namespace Amitav\Todo;

use Illuminate\Support\ServiceProvider;

class TodoServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('todo', function ($app) {
            return new Todo;
        });
    }

    public function boot()
    {
        // loading the routes file
        require __DIR__ . '/Http/routes.php';
    }
}
