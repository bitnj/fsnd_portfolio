module.exports = function (grunt) {

    /* yml file with all project directories */
    var config = grunt.file.readYAML('Gruntconfig.yml');

    /* causes all dependencies to be loaded (i.e. from plug-ins loaded via 
     * npm install --save-dev) */
    require('load-grunt-tasks')(grunt);

    /* configure grunt tasks - load from separate files to keep it modular even
     * though its a bit of overkill for this project */
    require('./grunt_tasks/html.js')(grunt, config);
    /*require('./grunt_tasks/images.js')(grunt, config);
    require('./grunt_tasks/css.js')(grunt, config);*/
    require('./grunt_tasks/javascript.js')(grunt, config);
    require('./grunt_tasks/general.js')(grunt, config);

    /* register tasks */
    grunt.registerTask('default', 
            ['htmllint', 
            'jshint', 
            'clean', 
            'mkdir', 
            'copy']);
};
