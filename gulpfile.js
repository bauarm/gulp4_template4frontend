const gulp = require('gulp');
const pug2html = require('./gulptasks/pug');
const styles = require('./gulptasks/styles');

const dev = gulp.parallel(pug2html, styles);

exports.default = gulp.series(
  dev

);

