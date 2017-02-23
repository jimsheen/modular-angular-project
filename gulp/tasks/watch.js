var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gulpif = require('gulp-if');
var config = require('../config');

// Watch for sass and js changes
gulp.task('watch', function() {
    $.livereload.listen();
    gulp.watch(config.defaults.src + '**/*').on('change', function(event) {
        console.log(event);
        // config.defaults.watchChanged = true;
        config.defaults.watchEvent = event;
        gulp.start('appCompiler');
    });

});
