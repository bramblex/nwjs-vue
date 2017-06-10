'use strict'

require('shelljs/global')
const fs = require('fs')
const NwBuilder = require('nw-builder')

const uitls = require('./utils')
const config = require('../config/')
const nwconfig = require('../config/nw').build 
const nwmanifest = require('../config/nw-manifest')

const dependencies = require('../package.json').dependencies

fs.writeFileSync(
  'tmp/build/package.json',
  JSON.stringify(nwmanifest, null, 2),
  'utf-8')

const deps = {}
const resolve = p => {
  if (!deps[p]) {
    deps[p] = true
    const p_deps = require(`${p}/package.json`).dependencies || {}
    Object.keys(p_deps).forEach(function (p) {
      return resolve(p)
    })
  }
}

resolve('..')
delete deps['..']

mkdir('-p', 'tmp/build/node_modules')
rm('-r', 'tmp/build/node_modules/*')

Object.keys(deps).forEach(function (p) {
  console.log(`copy dependencies node_modules/${p}`)
  cp('-r', `node_modules/${p}`, 'tmp/build/node_modules/')
})

const nw = new NwBuilder(nwconfig)
nw.on('log', str => console.log('[NW]', str))
nw.build()