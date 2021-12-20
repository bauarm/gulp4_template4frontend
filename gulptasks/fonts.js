const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('dev/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts/'))
};