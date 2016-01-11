'use strict';

const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const aliasify = require("aliasify");
const webify = require('./web/webify');

gulp.task('browserify', () => {
  return browserify('index.web.js', {debug: true})
    .transform(babelify, {presets: ["es2015", "react"]})
    .transform(webify)
    .transform(aliasify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../happy_shopping_dist_web'));
});

gulp.task('copyWeb', () => {
  return gulp.src('./web/**.*').pipe(gulp.dest('../happy_shopping_dist_web'));
}); 

gulp.task('default', ['browserify', 'copyWeb']);