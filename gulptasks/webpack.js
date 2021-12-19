const gulp = require('gulp');
const wbpack = require('webpack-stream');



let webConfig={
  output:{
    filename: "bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude:'/node_modules/'
      }
    ]
  },
  mode: global.isDev ? 'development' : 'production',
  devtool: global.isDev ? 'eval-source-map' : 'none'
  };

module.exports = function webpack_gulp() {
    return gulp.src('./dev/js/entry.js')
    .pipe(wbpack(webConfig))
    .pipe(gulp.dest('./dist/js'));
  };