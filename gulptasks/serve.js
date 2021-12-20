const gulp = require('gulp');

const styles = require('./styles.js');
const pug = require('./pug.js');
const script = require('./webpack.js');
const fonts = require('./fonts.js');
const images = require('./images.js');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    browser: "google chrome",
    open: true,
    cors: true
  });

  
  gulp.watch('dev/sass/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('dev/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('dev/pug/**/*.pug', gulp.series(pug)).on('change', server.reload);
  gulp.watch('dev/images/**/*.{gif,png,jpg,svg,webp}', gulp.series(images)).on('change', server.reload);
  gulp.watch('dev/fonts/**/*.*', gulp.series(fonts)).on('change', server.reload);
  gulp.watch('dist/*.html').on('change', server.reload);

  return cb()
};