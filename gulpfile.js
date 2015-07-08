var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    /*adding the styles*/
    mix.styles([
        'normalize.css',
        'bootstrap.min.css',
        'ripple.css',
        'material.css',
        'roboto.css',
        'animate.css'
    ]);

    /*mix.less([
        'custom.less'
    ]);*/

    mix.scripts([
        'app.js'
    ]);

    mix.phpUnit();

    mix.version(["css/all.css", "js/all.js", "css/app.css"]);
});
