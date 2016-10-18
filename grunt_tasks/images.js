module.exports = function(grunt, config) {

    grunt.config.merge({
    /* clear out the images directory if it exists */
        clean: {
            dev: {
                src: [config.distImageDir]
            },
        }
    };

    /* create the images directory if it is missing */
    mkdir: {
        dev: {
            options: {
                create: [config.distImageDir],
            },
        },
    });    
};
