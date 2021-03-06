module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath : '',

        // frameowrks to used
        frameworks : ['mocha', 'chai-spies', 'chai'],

        // list of files / pattens to load in the browser
        files : [
            'bin/client/js/vendor.min.js',
            'client/vendor/angular-mocks/angular-mocks.js',
            'bin/client/js/bhima.min.js',
            'bin/client/partials/**/*.html',
            'test/client-unit/**/*.spec.js'],
        
        // list of files to exclude
        exclude : [],

        // preprocess matching files beofer serving them to the browser
        // avaulable preprocess: https:/npmjs.org/browse/keywoard/karam-preprocessor
        preprocessors : {
            "**/*.html" : ['ng-html2js']
        },

        ngHtml2JsPreprocessor : {
            stripPrefix : 'bin.client',
            moduleName : 'templates'
        },
        
        // test results reporter to used
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters : ['progress'],

        // web server port
        port : 9876,

         // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers : ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun : false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency : Infinity
    });
};