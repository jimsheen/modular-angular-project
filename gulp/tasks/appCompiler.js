var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

function appCompiler() {

    var isProd = (process.env.NODE_ENV === 'production') ? true : false

    console.log(process.env.NODE_ENV);

    // isProd = true;

    console.log('isProd = ' + isProd);


    /**
     *
     * If fired by watch task check the path and only execute relevant functions to
     * greatly reduce build time
     *
     */
    
    var watchEvent = config.defaults.watchEvent;
    if (watchEvent.type === 'changed' && watchEvent.path.indexOf('.js') != -1) {
        jsTask();
    }
    else if (watchEvent.type === 'changed' && watchEvent.path.indexOf('.html') != -1) {
        htmlTask(watchEvent.path);
    }
    else {
        jsTask();
        htmlTask();
    }

    function jsTask() {
        gulp.src(config.app.js.src)
            .pipe(gulpif(!isProd, $.sourcemaps.init()))
            .pipe($.filelog())
            .pipe($.concat('app.js'))
            .pipe($.ngAnnotate())
            .pipe(gulpif(!isProd, $.sourcemaps.write()))
            .pipe(gulpif(isProd, $.uglify()))
            .pipe(gulpif(isProd, $.stripDebug()))
            .pipe(gulp.dest(config.app.js.dest));
    }


    function htmlTask(path) {

        // if single html file move just the related file instead of all
        if (path) {
            config.app.html.src = path;
        }
        gulp.src(config.app.html.src, { base: config.app.html.src })
            .pipe($.flatten())
            .pipe(gulp.dest(config.app.html.dest))
    }

}

gulp.task('appCompiler', appCompiler);
