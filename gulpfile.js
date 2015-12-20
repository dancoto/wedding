var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var concat      = require('gulp-concat');
var copy        = require('gulp-copy');
var clean       = require('gulp-clean');

/**
 * Push build to gh-pages
 */

gulp.task('clean', function () {
	return gulp.src('./dist', {read: false})
		.pipe(clean());
});
gulp.task('concat-js', function() {
  return gulp.src(["node_modules/jquery/dist/jquery.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js"])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});
gulp.task('concat-css', function() {
  return gulp.src(["./node_modules/bootstrap/dist/css/bootstrap.min.css", "./node_modules/bootstrap/dist/css/bootstrap-theme.min.css", "./src/css/theme.css"])
         .pipe(concat('all.css'))
         .pipe(gulp.dest('./dist/css/'))
});

gulp.task('copy-index', function() {
  return gulp.src("./src/index.html")
         .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-images', function() {
  return gulp.src("./src/images/**/*")
        .pipe(gulp.dest("./dist/images/"))
});

gulp.task('copy-fonts', function() {
    return gulp.src("./src/fonts/**/*")
        .pipe(gulp.dest("./dist/fonts"))
})

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('build', ['clean','concat-js','concat-css', 'copy-images', 'copy-fonts', 'copy-index']);
gulp.task('release', ['build','deploy']);