var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    cached = require('gulp-cached'),
    plumber = require('gulp-plumber'),
    preprocess = require('gulp-preprocess'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    preprocess = require('gulp-preprocess'),
    globalConfig = require('../config');

var localConfig = {
  src: function() {
    return ['./src/app/app.module.js',
        './src/**/*.js',
        '!./src/app/config/!(' + globalConfig.environment + '.js)'];
  },
  dest: function () {
    return './build/js/';
  },
  buildFileName: 'all.js'
};

gulp.task('scripts', function() {
  return gulp.src(localConfig.src())
    .pipe(cached('scripts'))
    .pipe(plumber({ errorHandler: globalConfig.errorHandler }))
    .pipe(preprocess({ context: globalConfig.getConfigKeys() }))
    .pipe(gulpif(globalConfig.development(), eslint()))
    .pipe(gulpif(globalConfig.development(), eslint.format()))
    .pipe(gulpif(globalConfig.development(), sourcemaps.init()))
      .pipe(babel())
      .pipe(gulpif(!globalConfig.development(), concat(localConfig.buildFileName)))
      .pipe(gulpif(!globalConfig.development(), uglify()))
    .pipe(gulpif(globalConfig.development(), sourcemaps.write()))
    .pipe(gulp.dest(localConfig.dest()));
});
