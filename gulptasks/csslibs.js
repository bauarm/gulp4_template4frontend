const gulp         = require('gulp');
const concat       = require('gulp-concat');
const cleanCSS     = require('gulp-clean-css');


module.exports = function cssLibs(){
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cleanCSS({level:{1:{specialComments:0}}}))
    .pipe(gulp.dest('./dist/static/css'))
};

