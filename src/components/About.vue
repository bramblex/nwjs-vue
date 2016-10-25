<template>
  <div class="about">
    <h1>关于</h1>
    <hr />
    <p>版本：{{ version }}</p>
    <p>作者：{{ author }}</p>
  </div>
</template>

<script>
  const package_json = require('../../package.json')
  export default {
    data() {
      return {
        version: package_json.version,
        author: package_json.author
      }
    }
  }
</script>

<style scoped>
  .about {
    width: 100%;
  }
</style>
