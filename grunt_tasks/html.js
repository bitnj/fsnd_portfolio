module.exports = function(grunt, config) {

    /* configure tasks */
    grunt.config.merge({
        htmllint: {
            options: {},
            src: [
                config.srcRoot + '*.html'
            ],
        },
    })
}
