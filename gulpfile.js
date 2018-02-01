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
});

// gulp watch
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('public/stylesheets/*.css', browserSync.reload);
});
