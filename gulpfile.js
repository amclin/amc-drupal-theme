'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        'node_modules/foundation-sites/scss'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
})
