const gulp = require('gulp');
const pug = require('gulp-pug');


module.exports = function pug2html() {
  return gulp.src('dev/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
};
