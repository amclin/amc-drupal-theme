'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');
const sassPaths = [
  'node_modules/main.css/dist',
  'node_modules/normalize.css',
  'node_modules/foundation-sites/scss'
]

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: sassPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
})
