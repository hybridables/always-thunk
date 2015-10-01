/*!
 * always-thunk <https://github.com/hybridables/always-thunk>
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
  test('should transform sync function to thunk', function (done) {
    var readFileSync = alwaysThunk(fs.readFileSync)
    readFileSync('./package.json', 'utf8')(function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('"license": "MIT"') !== -1)
      done()
    })
  })
  test('should transform asynchronous function to thunk', function (done) {
    var readFile = alwaysThunk(fs.readFile)
    readFile('./package.json', 'utf8')(function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('"license": "MIT"') !== -1)
      done()
    })
  })
})
