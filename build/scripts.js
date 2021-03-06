(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  var scriptFiles = [
    'src/check-native.js',
    'src/promise-polyfill.js',
  ];

  gulp.task('scripts', function () {
    return gulp.src('src/*.js')
      .pipe($.concat('promise-polyfill.js'))
      .pipe(gulp.dest('dist'))
      .pipe($.size({title: '[ default size ]:'}))
      .pipe($.uglify())
      .pipe($.rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({title: '[ minimize size ]:'}));
  });

}());
