const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.js([
    'resources/js/client.js'
], 'public/js/client.js');

mix.js([
    'resources/js/product.js'
], 'public/js/product.js');

mix.js([
    'resources/js/order.js'
], 'public/js/order.js');

mix.js([
    'resources/js/dashboard.js'
], 'public/js/dashboard.js');

mix.js([
    'resources/js/user.js'
], 'public/js/user.js');
