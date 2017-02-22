var src = 'src/',
    dest = 'min/'
var js = {
    'src': src + 'js/',
    'dest': dest + 'js/',
}
var libs = {
    'src' : src + 'assets/libs/',
    'dest' : dest + 'sharedLibs'
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
        src: src + 'app/**/*.js',
        dest: js.dest
    },
    libs: {
        src: [
                libs.src + 'foundation/js/foundation/',
                libs.src + 'jquery/**/*.js',
                libs.src + 'angular/**/*.js',
                libs.src + 'angular-route/**/*.js'

            ],
        dest: js.dest
    },
    // sass: {
    //   src: [
    //     src + '/**/*.scss'
    //   ],
    //   outputName: 'moondash.css',
    //   dest: dest
    // },
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
