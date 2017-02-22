var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function appCompiler() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false

    console.log(process.env.NODE_ENV);

    isProd = true;

    console.log('isProd = ' + isProd);

    gulp.src(config.app.src)
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.filelog())
        .pipe($.concat('app.js'))
        .pipe($.ngAnnotate())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe(gulp.dest(config.app.dest));
}

gulp.task('appCompiler', appCompiler);
