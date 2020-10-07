const mix = require('laravel-mix');

require('laravel-mix-imagemin');

if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.webpackConfig({devtool: 'inline-source-map'});
} else {
    mix.version();
}

mix
    .setResourceRoot('../')
    .setPublicPath(`assets`)
    .js(`src/js/app.js`, `assets/js`)
    .extract([
        //'bootstrap',
        'jquery',
        //'popper.js',
        //'glider-js',
    ])
    .sass(`src/sass/vendor.scss`, `assets/css`)
    .sass(`src/sass/app.scss`, `assets/css`)
    .imagemin('html-images/**/*', {context: 'src', force: true}, {});
;