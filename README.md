# always-thunk [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Create thunk from async or sync function. Works like `thunkify`.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i always-thunk --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var fs = require('fs')
var alwaysThunk = require('always-thunk')

var readFile = alwaysThunk(fs.readFile)
readFile('./package.json', 'utf8')(function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> package.json content
})

var readFileSync = alwaysThunk(fs.readFileSync)
readFileSync('./package.json', 'utf8')(function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> package.json content
})
```


## Related
- [always-promise](https://github.com/tunnckocore/always-promise#readme): Create Bluebird Promise from given async or synchronous function. It automatically convert sync functions to async, then to promise.
- [always-callback](https://github.com/tunnckocore/always-callback#readme): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.
- [handle-callback](https://github.com/hybridables/handle-callback#readme): Make promise to have support for callback api, it returns promise in that same time.
- [make-callback](https://github.com/tunnckocore/make-callback#readme): Make synchronous function to support callback api
- [promise2thunk](https://github.com/tunnckocore/promise2thunk#readme): Convert (transform) promise to thunk, just like was in co@3


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/always-thunk/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/always-thunk
[npmjs-img]: https://img.shields.io/npm/v/always-thunk.svg?label=always-thunk

[license-url]: https://github.com/tunnckoCore/always-thunk/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/always-thunk
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/always-thunk.svg

[travis-url]: https://travis-ci.org/tunnckoCore/always-thunk
[travis-img]: https://img.shields.io/travis/tunnckoCore/always-thunk.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/always-thunk
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/always-thunk.svg

[david-url]: https://david-dm.org/tunnckoCore/always-thunk
[david-img]: https://img.shields.io/david/tunnckoCore/always-thunk.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
