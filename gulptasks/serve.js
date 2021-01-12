const gulp = require('gulp');

const styles = require('./styles.js');
const pug2html = require('./pug.js');
const script = require('./webpack.js');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  
  gulp.watch('dev/sass/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('dev/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('dev/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);

  return cb()
};