'use strict'

module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: [
      'node_modules/angular/angular.js',
      'test/*.js'
    ],
    preprocessors: {
      'test/*.js': 'browserify'
    },
    browsers: ['PhantomJS']
  })
}
