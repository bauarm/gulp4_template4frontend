const gulp = require('gulp');
const wbpack = require('webpack-stream');


module.exports = function webpack_gulp() {
    return gulp.src('./dev/js/entry.js')
    .pipe(wbpack({
      
    }, null, function(err, stats) {
      
    }))
    .pipe(gulp.dest('dist/js'));
  };