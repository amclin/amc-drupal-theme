'use strict'

const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
let sass = require('gulp-sass')

const destination = './dist/amc'
const sassPaths = [
  'node_modules/main.css/dist',
  'node_modules/normalize.css',
  'node_modules/foundation-sites/scss'
]

sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      includePaths: sassPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest(`${destination}/css`))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
})

// Copies theme .js files to distribution
gulp.task('js', () => {
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination))
})

// Copies theme .info and .php files to distribution
gulp.task('php', () => {
  return gulp.src('./src/**/*.{php,info}')
    .pipe(gulp.dest(destination))
})

// Copies images to distribution
gulp.task('images', () => {
  return gulp.src('./src/**/*.{png,gif,jpg,svg}')
    .pipe(gulp.dest(destination))
})
