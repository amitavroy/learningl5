var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.less([
        'bootstrap.less',
        'roboto.less',
        'material.less',
        'material-pallete.less',
        'ripple.less',
        'custom.less',
    ]);

    mix.styles([
        "bootstrap.css",
        "roboto.css",
        "material.css",
        "material-pallete.css",
        "ripple.css",
        "custom.css",
    ], 'public/css/all.css', 'public/css');

    mix.scripts([
        "jquery-1.11.2.js",
        "bootstrap.js",
        "ripples.js",
        "material.js",
        "angular.js",
        "app.js"
    ]);

    mix.version(["css/all.css", "js/all.js"]);
});
