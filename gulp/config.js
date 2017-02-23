var src = 'src/',
    dest = 'min/'
var js = {
    'src': src + 'js/',
    'dest': dest + 'js/',
}
var libs = {
    'src': src + 'assets/libs/',
    'dest': dest + 'sharedLibs'
}

module.exports = {
    defaults: {
        src: src,
        dest: dest,
        js: js,
        watchChanged: false,
        watchEvent: {}
    },
    app: {
        js: {
            src: src + 'app/**/*.js',
            dest: js.dest
        },
        html: {
            src: src + 'app/**/*.html',
            dest: dest
        }
    },
    libs: {
        js: {
            src: [
                libs.src + 'jquery/**/*.js',
                libs.src + 'foundation/js/foundation/foundation.js',
                libs.src + 'angular/**/*.js',
                libs.src + 'angular-route/**/*.js'
            ],
            dest: js.dest
        },
        sass: {
            base: libs.src,
            src: [
                libs.src + 'foundation/scss/*.scss'
            ],
            dest: dest + 'css/'
        }
    },
    sass: {
      src: [
        src + 'assets/scss/**/*.scss'
      ],
      dest: dest + 'css/'
    },
    scriptCompiler: {
        home: {
            deps: [
                'libs/bxslider-4',
                'components/slider',
                'components/accordion',
                'components/ajaxBlogPosts',
                'components/productList'
            ]
        },
        blog: {
            deps: [
                'components/slider',
                'components/accordion'
            ]
        },
        test: {
            deps: [
                'components/slider',
                'components/accordion'
            ]
        }
    }
};
