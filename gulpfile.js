const gulp = require('gulp');
const pug2html = require('./gulptasks/pug');
const styles = require('./gulptasks/styles');
const wbpack = require('./gulptasks/webpack');
const serve = require('./gulptasks/serve');
const cssLibs = require('./gulptasks/csslibs');
const jsLibs = require('./gulptasks/jslibs');

const dev = gulp.parallel(pug2html, styles, wbpack);

exports.default = gulp.series(
  dev,serve

);

gulp.task('js-libs',jsLibs);
gulp.task('css-libs',cssLibs);
gulp.task('sass',styles);
gulp.task('pug',pug2html);
gulp.task('webpack',wbpack);

