'use strict'

const build = {
  files: './tmp/build/**',
  version: 'latest',
  platforms: ['osx64', 'win32'], // win32, win64, osx32, osx64, linux32, linux64
  flavor: 'normal', // 'sdk', 'normal', 'flavor', 'nacl'

  buildType: 'versioned',
  buildDir: 'packages',

  zip: 'true'
}

const dev = Object.assign({}, build, {
  files: './tmp/dev/**',
  flavor: 'sdk',
  argv: ['--load-extension=vue-devtools/shells/chrome']
})

module.exports = {build, dev}