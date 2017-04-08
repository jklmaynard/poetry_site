var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// inhouse gulp tasks
gulp.task('hello', function() {
  console.log('hello James!');
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: 'app.js'
  })
})

// gulp watch
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('public/stylesheets/*.css', browserSync.reload);
})







// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var useref = require('gulp-useref');
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');
//
// // gulp tasks
// gulp.task('useref', function() {
//   return gulp.src('app/*.html')
//   .pipe(useref())
//   .pipe(gulpIf('*.js', uglify()))
//   .pipe(gulpIf('*.css', cssnano()))
//   .pipe(gulp.dest('dist'))
// });
// gulp.task('sass', function() {
//   return gulp.src('app/scss/**/*.scss')
//   .pipe(sass())
//   .pipe(gulp.dest('app/css'))
//   .pipe(browserSync.reload({
//     stream: true
//   }))
// });
//
// // gulp watch tasks
// gulp.task('watch', ['browserSync'], function() {
//   // gulp.watch('app/scss/**/*.scss', ['sass']);
//   gulp.watch('app/css/**/*.css', browserSync.reload);
// });
