const gulp = require('gulp');
const clean = require('./gulptasks/clean');
const pug = require('./gulptasks/pug');
const styles = require('./gulptasks/styles');
const wbpack = require('./gulptasks/webpack');
const serve = require('./gulptasks/serve');
const cssLibs = require('./gulptasks/csslibs');
const jsLibs = require('./gulptasks/jslibs');

global.isDev=true;
global.isProd=!isDev;

const dev = gulp.parallel(pug, styles, wbpack);

exports.default = gulp.series(
  clean,dev,serve

);

gulp.task('js-libs',jsLibs);
gulp.task('css-libs',cssLibs);
gulp.task('sass',styles);
gulp.task('pug',pug);
gulp.task('webpack',wbpack);
gulp.task('clean',clean);

