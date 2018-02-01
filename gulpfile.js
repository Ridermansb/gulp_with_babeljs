var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
	gulp.src('./src/index.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));

	gulp
		.src([ './node_modules/babel-polyfill/dist/polyfill.min.js' ])
		.pipe(gulp.dest('./dist/'));
	gulp
		.src([ './src/index.html' ])
		.pipe(gulp.dest('./dist/'));
});


gulp.task('watch', () => {
	gulp.watch('./src/**/*.js', ['default']);
});
