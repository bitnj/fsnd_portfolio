module.exports = function(grunt, config) {
    
    /* configure tasks */
    grunt.config.merge({
        /* clean the dist directory in preparation for copying updated files */
        clean: {
            release: [config.distImagesDir + '*.{gif, jpg, png}',
                config.distCSSDir + '*.css',
                config.distJSDir + '*.js'] 
        },
        
        /* make the directories if they don't already exist */
        mkdir: {
            release: {
                options: {
                    create: [
                        config.distRoot + 'images',
                        config.distRoot + 'css',
                        config.distRoot + 'js']
                }
            }
        },

        /* copy needed files into their appropriate dist directory */
        copy: {
            release: {
                expand: true,
                src: config.srcRoot + '*',
                dest: config.distRoot
            }
        }
    });
};
