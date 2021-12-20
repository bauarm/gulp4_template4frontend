const gulp = require('gulp');

module.exports = function images() {
  return gulp.src('dev/images/**/*.*')
    .pipe(gulp.dest('./dist/images/'))
};