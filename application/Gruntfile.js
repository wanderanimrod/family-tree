module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            app: {
                src: ['js/**/*.js'],
                dest: 'static/build.js'
            }
        },

        watch: {
            browserify: {
                files: ['js/**/*.js'],
                tasks: ['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify']);
};

