const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const cleanCSS     = require('gulp-clean-css');
sass.compiler      = require('node-sass');

module.exports = function styles() {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist:  [ "last 10 version" ],
      grid:true,
      cascade: false
    }))
    .pipe(concat('app.min.css'))
    .pipe(cleanCSS({level:{1:{specialComments:0}},/*format:'beautify'*/}))
    .pipe(gulp.dest('./dist/styles/'))
};