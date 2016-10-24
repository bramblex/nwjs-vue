
const NwBuilder = require('nw-builder')
const path = require('path')

const nw = new NwBuilder({
  files: './test/**',
  platforms: ['osx64', 'win32'],
  version: '0.18.2',
  flavor: 'sdk', // 'sdk' , 'normal', 'flavor'
  buildType: 'versioned',
  argv: ['--load-extension=dev-extension/build/']
})


nw.on('log', console.log)
nw.run()
