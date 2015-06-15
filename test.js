'use strict'

/*global describe,beforeEach,it*/

var assert = require('assert')
var angular = require('angular')
require('angular-mocks/ngMock')

describe('assertQConstructor', function () {
  beforeEach(angular.mock.module(require('./')))
  it('is a noop with the constructor', function (done) {
    angular.mock.inject(function (assertQConstructor) {
      assertQConstructor()
      done()
    })
  })
  it('throws without the constructor', function (done) {
    angular.mock.module(function ($provide) {
      $provide.value('$q', {})
    })
    angular.mock.inject(function (assertQConstructor) {
      assert.throws(function () {
        assertQConstructor()
      }, /\$q is not a function/)
      assert.throws(function () {
        assertQConstructor('Custom msg')
      }, /Custom msg/)
      done()
    })
  })
})
