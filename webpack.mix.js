let mix = require('laravel-mix');

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

if(mix.inProduction()) {
 mix.options({
	 terser: {
		 terserOptions: {
			 compress: {
				 drop_console: true
			 }
		 }
	 }
 });
}

mix
	.js('assets/js/app.js', 'static/js')
	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve('assets/css')
			}
		}
  })
	.sass('assets/css/app.scss', 'static/css');


mix.browserSync({
	proxy: 'hamomhim.test',
	files: ["static/css/app.css", "static/js/*.js"],
});
