'use strict'

var fs = require('fs')
var saxophonist = require('saxophonist')
var total = 0
var files = process.argv.splice(2)
var pump = require('pump')

console.time('parsing time')
parse()

function parse () {
  var file = files.shift()

  if (!file) {
    console.timeEnd('parsing time')
    console.log('total pages', total)
    return
  }

  console.log('parsing', file)

  pump(
    fs.createReadStream(file),
    saxophonist('page', { highWaterMark: 1024 * 1024 * 32 })
      .on('data', plusOne),
    parse)
}

function plusOne () {
  total++
}
