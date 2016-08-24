const got = require('got')
const parse = require('jsonstream2').parse

got.stream('http://registry.npmjs.org/-/all')
   // We can parse the JSON on real time if we want as well
   //.pipe(parse('*.name', (name) => name + '\n'))
   .pipe(process.stdout)
