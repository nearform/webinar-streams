'use strict'


var through2 = require('through2')

var stream = through2({objectMode: true}, function (chunk, enc, callback) {
  console.log(chunk)
  console.log(typeof chunk)
  this.push(chunk)
})

stream.write({hello: 'World!'})
