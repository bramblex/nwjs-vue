// https://github.com/shelljs/shelljs
"use strict";
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  const co = require('co')
  const fs = require('mz/fs')
  const manifest = require('../config/manifest')
  const _ = require('lodash')
  const NwBuilder = require('nw-builder')

  const dependencies = require('../package.json').dependencies

  co(function* (){
    yield fs.writeFile(
      'tmp/build/package.json',
      JSON.stringify(_.merge(manifest, {dependencies}), null, 2),
      'utf8'
    )

    const deps = {}
    const resolve = p => {
      if (!deps[p]){
        deps[p] = true
        const p_deps = require(`${p}/package.json`).dependencies || []
        Object.keys(p_deps).forEach(function(p){
          return resolve(p)
        })
      }
    }

    resolve('..')
    delete deps['..']

    mkdir('-p', 'tmp/build/node_modules')
    rm('-r', 'tmp/build/node_modules/*')
    Object.keys(deps).forEach(function(p){
        console.log(`copy dependencies node_modules/${p}`)
        cp('-r', `node_modules/${p}`, 'tmp/build/node_modules/')
    })
    const nwconfig = require('./nwbuild').build
    const nw = new NwBuilder(nwconfig)
    nw.on('log', console.log)
    yield nw.build()
  })

})
