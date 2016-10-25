<template>
  <div id="app">

    <div class="layout">
      <div class="layout-header-row">
        <x-header></x-header>
      </div>

      <div class="layout-content-row">
        <div class="layout-slider-column">
          <x-slider :buttons="buttons"></x-slider>
        </div>
        <div class="layout-content-column">
          <x-content>
            <router-view :config.sync="config"></router-view>
          </x-content>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import XHeader from 'components/XHeader.vue'
  import XSlider from 'components/XSlider.vue'
  import XContent from 'components/XContent.vue'

  const __default__ = {
    aaa: 'bbb',
    ccc: 'ddd',
    eee: 100,
    aaa: true
  }

  export default {
    name: 'app',
    components: {XHeader, XSlider, XContent},
    data(){
      return {
        buttons: [
          {name: '监控', link: '/index'},
          {name: '设置', link: '/settings'},
          {name: '关于', link: '/about'}
        ],
//        config: JSON.parse(localStorage['config'] || 'null') || _default
        config: __default__
      }
    },
    watch: {
      config(){
        console.log('config changed')
//        localStorage['config'] = JSON.stringify(this.config)
      }
    }
  }

</script>

<style lang="less">

  @import 'assets/color.less';
  @import 'assets/layout.less';

  html, body, #app{
    padding:0;
    margin:0;
    height: @client-height;
    width: @client-width;
    overflow: auto;
  }

  html {
    overflow: hidden;
  }

  .layout {
    height: @client-height;
    width: @client-width;
    overflow: auto;

    .layout-header-row {
      width: @client-width;
      height: @header-height;
    }

    .layout-content-row {
      width: @client-width;
      height: @content-height;
      clear: both;

      div {
        float: left;
      }

      .layout-slider-column {
        height: @content-height;
        width: @slider-width;
      }

      .layout-content-column {
        height: @content-height;
        width: @content-width;
      }
    }
  }


  /*#app {*/
    /*-webkit-app-region: drag;*/
  /*}*/

</style>
