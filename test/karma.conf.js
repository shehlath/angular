// Karma configuration
// Generated on 2016-03-09

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'test/spec/**/*.js',
      'app/**/*.js',
      'app/**/*.html',
      //fixtures
      {
        pattern: 'test/mock/**/*.json',
        watched: true,
        served: true,
        included: false
      }
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-ng-html2js-preprocessor',
      'ng-html2js'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

    //Code coverage
    preprocessors: {
      'app/**/*.js': ['coverage'],
      'app/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // strip app from the file path
      stripPrefix: 'app/',
      moduleName: 'templates'
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir: function (browser) {
        // normalization process to keep a consistent browser name accross different
        // OS
        return browser.split(/[ /-]/)[0];
      }
    }
  });
};
