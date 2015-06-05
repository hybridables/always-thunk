/*!
 * always-thunk <https://github.com/tunnckoCore/always-thunk>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var alwaysCallback = require('always-callback')
var manageArguments = require('manage-arguments')

module.exports = function alwaysThunk (obj) {
  if (typeof obj !== 'function') {
    throw new TypeError('always-thunk expect a function')
  }
  return function () {
    var args = manageArguments(arguments)
    return function (done) {
      var fn = alwaysCallback(obj)
      fn.apply(obj, args.concat(done))
    }
  }
}
