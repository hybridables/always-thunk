/*!
 * always-thunk <https://github.com/tunnckoCore/always-thunk>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function alwaysThunk (val) {
  var self = this
  return function () {
    var ctx = self || this
    var args = require('sliced')(arguments)
    return function (done) {
      ctx = ctx || this
      require('merz').call(ctx, val).apply(ctx, args.concat(done))
    }
  }
}
