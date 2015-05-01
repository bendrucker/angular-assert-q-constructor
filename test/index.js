'use strict'

/*global describe,beforeEach,it*/

import {throws as assertThrows} from 'assert'
import angular from 'angular'
import 'angular-mocks'
import qCtor from '../'

describe('assertQConstructor', () => {
  beforeEach(angular.mock.module(qCtor))
  it('is a noop with the constructor', (done) => {
    angular.mock.inject((assertQConstructor) => {
      assertQConstructor()
      done()
    })
  })
  it('throws without the constructor', (done) => {
    angular.mock.module(($provide) => {
      $provide.value('$q', {})
    })
    angular.mock.inject((assertQConstructor) => {
      assertThrows(() => {
        assertQConstructor()
      }, /\$q is not a function/)
      assertThrows(() => {
        assertQConstructor('Custom msg')
      }, /Custom msg/)
      done()
    })
  })
})
