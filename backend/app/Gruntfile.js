module.exports = function (grunt) {

    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            app: {
                src: ['static/js/**/*.js'],
                dest: 'static//build.js'
            }
        },

        watch: {
            browserify: {
                files: ['static/js/**/*.js'],
                tasks: ['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify']);
};

