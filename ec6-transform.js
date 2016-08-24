'use strict'

const Transform = require('stream').Transform

class MyTransform extends Transform {
  constructor(options) {
    super(options);
  }
  
  _transform(chunk, enc, callback) {
    console.log(typeof chunk)
  }
}

var myTransform = new MyTransform({objectMode: true})
myTransform.write({a: 'Hello!'})
