/*!
 * always-thunk <https://github.com/tunnckoCore/always-thunk>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var alwaysThunk = require('./index')

test('always-thunk:', function () {
  test('should throw TypeError if not a function given', function (done) {
    function fixture () {
      alwaysThunk(12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /always-thunk expect a function/)
    done()
  })
  test('should transform sync function to thunk', function (done) {
    var readFileSync = alwaysThunk(fs.readFileSync)
    readFileSync('./package.json', 'utf8')(function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('tunnckoCore/always-thunk') !== -1)
      done()
    })
  })
  test('should transform asynchronous function to thunk', function (done) {
    var readFile = alwaysThunk(fs.readFile)
    readFile('./package.json', 'utf8')(function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('tunnckoCore/always-thunk') !== -1)
      done()
    })
  })
})
