const gulp         = require('gulp');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');

module.exports = function jsLibs(){
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
};