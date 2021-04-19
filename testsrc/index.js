const path = require('path')
const {read} = require('../src/functions/file.js')

const files = ['1.json', '2.json'].map((name) => path.join(__dirname, `data/${name}`))
const contents = read(files[0])

