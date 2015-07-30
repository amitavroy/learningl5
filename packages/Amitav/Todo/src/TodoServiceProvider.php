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

        // define the path for the view files
        $this->loadViewsFrom(__DIR__ . '/../views', 'todo');

        // define the files which are going to be published
        $this->publishes([
            __DIR__ . '/migrations/2015_07_25_000000_create_todo_table.php' => base_path('database/migrations/2015_07_25_000000_create_todo_table.php'),
        ]);
    }
}
