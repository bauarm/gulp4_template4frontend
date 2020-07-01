const gulp = require('gulp');
const pug2html = require('./gulptasks/pug');

const dev = gulp.parallel(pug2html);

exports.default = gulp.series(
  dev

);

