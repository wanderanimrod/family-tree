module.exports = function(config) {
    'use strict';

    config.set({
        autoWatch: true,

        basePath: '../',

        frameworks: ['jasmine', 'browserify'],

        files: [
            'spec/**/*.js'
        ],

        preprocessors: {
            'spec/**/*.js': ['browserify']
        },

        port: 8080,

        browsers: [
            'PhantomJS'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-browserify'
        ],

        singleRun: false,

        colors: true,

        logLevel: config.LOG_INFO
    });
};
