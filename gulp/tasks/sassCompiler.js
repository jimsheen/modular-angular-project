var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function sassCompiler() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false;

    console.log(process.env.NODE_ENV);

    console.log('isProd = ' + isProd);

    console.log(config.sass.src);

    gulp.src(config.sass.src, { base: config.defaults.src })
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 10
        }))
        .pipe($.flatten())
        .pipe(gulpif(!isProd, $.sourcemaps.write()))
        .pipe($.autoprefixer())
        .pipe(gulpif(isProd, $.cssmin()))
        .pipe(gulp.dest(config.sass.dest))
        .pipe($.livereload());

}

gulp.task('sassCompiler', sassCompiler);
