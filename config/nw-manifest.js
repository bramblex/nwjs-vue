'use strict'
const package_json = require('../package.json')
module.exports = Object.assign({}, package_json, {
  main: 'index.html',
})