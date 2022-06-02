const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/sass/sass.css')
    .styles(['public/sass/sass.css', 'resources/css/*.css'], 'public/css/app.css');
