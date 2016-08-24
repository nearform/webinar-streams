const got = require('got')
const parse = require('jsonstream2').parse

got.stream('http://registry.npmjs.org/-/all')
   .pipe(parse('*.name', (name) => name + '\n'))
   .pipe(process.stdout)
