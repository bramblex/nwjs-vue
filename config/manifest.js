// nwjs manifest json file

const package_json = require('../package.json')

module.exports = {
  name: package_json.name,
  version: package_json.version,
  main: "index.html"
}
