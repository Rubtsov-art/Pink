'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass-compile', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
  })

  gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
  })
