const fsp = require('fs').promises

const read = (...paths) => paths.map((path) => fsp.readFile(path))

module.exports = { read }