'use strict'

const fs = require('fs')
require('shelljs/global')
const NwBuilder = require('nw-builder')

const config = require('../config/')
const nwconfig = require('../config/nw').dev
const nwmanifest = Object.assign({}, require('../config/nw-manifest'), {
  main: `http://localhost:${config.dev.port}`,
  'node-remote': '<all_urls>',
}) 

mkdir('-p', 'tmp/dev/')
fs.writeFileSync(
  'tmp/dev/package.json',
  JSON.stringify(nwmanifest, null, 2),
  'utf-8')

const nw = new NwBuilder(nwconfig)
nw.on('log', (str) => console.log('[NW]', str))
nw.run()