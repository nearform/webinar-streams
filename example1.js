const got = require('got')
const parse = require('jsonstream2').parse
// TODO David: Callback vs stream
got.stream('http://registry.npmjs.org/-/all')
   .pipe(parse('*.name', (name) => name + '\n'))
   .pipe(process.stdout)
