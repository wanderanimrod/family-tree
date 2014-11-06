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

        browserify: {
            transform: [require('stringify')()]
        },

        port: 8080,

        browsers: ['Chrome'],

        plugins: [
            "karma-chrome-launcher",
            'karma-jasmine',
            'karma-browserify'
        ],

        singleRun: false,

        colors: true,

        logLevel: config.LOG_INFO
    });
};
