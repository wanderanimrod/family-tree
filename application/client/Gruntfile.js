module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            dist: {
                files: {
                    'build/app.js': ['components/**/*.js']
                }
            }
        }
    });
};