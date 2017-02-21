var src = 'src/',
    dest = 'min/'
var js = {
    'src': src + 'js/',
    'dest': dest + 'js/',
}
module.exports = {
    defaults: {
        src: src,
        dest: dest,
        js: js,
        watchChanged: false,
        watchEvent: {}
    },
    foundation: {
        src: js.src + 'libs/foundation/js/foundation/',
        dest: js.dest + 'libs/',
        components: ['accordion', 'dropdown']
    },
    libs: {
        src: [
                '!' + js.src + 'libs/foundation/**/*.js',
                js.src + 'libs/jquery/**/*.js'
            ],
        dest: js.dest + 'libs/'
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
