var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function libCompiler() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false;

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);

    gulp.src(config.libs.js.src, { base: config.defaults.src })
        .pipe(gulpif(!isProd, $.sourcemaps.init()))
        .pipe($.filelog())
        .pipe($.concat('libs.js'))
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe(gulpif(isProd, $.uglify()))
        .pipe(gulpif(isProd, $.stripDebug()))
        .pipe(gulp.dest(config.libs.js.dest));

    gulp.src(config.libs.sass.src, { base: config.defaults.src })
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 10
        }))
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe($.autoprefixer())
        .pipe($.concat('libs.css'))
        .pipe(gulpif(isProd, $.cssmin()))
        .pipe(gulp.dest(config.libs.sass.dest))
        .pipe($.livereload());

}

gulp.task('libCompiler', libCompiler);
