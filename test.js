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

// test('always-thunk:', function () {
//   // body
// })

var readFileSync = alwaysThunk(fs.readFileSync)
readFileSync('./package.json', 'utf8')(console.log)

var readFile = alwaysThunk(fs.readFile)
readFile('./package.json', 'utf8')(console.log)
