<?php

namespace App\Providers;

use App\Repositories\EloquentTodo;
use App\Repositories\TodoInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(TodoInterface::class, EloquentTodo::class);
    }
}
