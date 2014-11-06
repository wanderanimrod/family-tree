module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var stringify = require('stringify');
    grunt.initConfig({
        watch: {
            files: ['components/**/*.js'],
            tasks: ['browserify']
        },
        browserify: {
            dist: {
                files: {
                    'build/app.js': ['components/**/*.js']
                },
                options: {
                    transform: [stringify()]
                }
            }
        },
        karma: {
            unit: {
                configFile: 'spec/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('build', [
        'browserify'
    ]);

    grunt.registerTask('default', [
        'browserify',
        'karma'
    ]);
};