<template>
  <div class="header">
    <div class="header-left"> {{title}} </div>

    <div class="header-right">
      <div class="header-button close" @click="close">x</div>
      <div class="header-button minimize" @click="minimize">-</div>
    </div>
  </div>
</template>

<script>
  const win = nw.Window.get()
  const tray = new nw.Tray({title: 'P'})
  const co = require('co')
  tray.on('click', function(){
    win.show()
  })

  export default{
    data(){
      return{
        title: require('../../package.json').name
      }
    },
    methods: {
      close(){
        const _this = this
        co(function* (){
          try {
            yield _this.$confirm('是否关闭窗口', '提示')
            win.close()
          } catch (e) {}
        })
      },
      minimize(){
        win.hide()
      }
    }
  }



</script>

<style lang="less" scoped>
  @import '../assets/color.less';
  @import '../assets/layout.less';

  .header {
    -webkit-user-select:none;
    -webkit-app-region: drag;
    width: @header-width;
    height: @header-height;
    background-color: @silver;

    color: @white;
    line-height: @header-height;
    font-size: @header-font-size;

    .header-left {
      float: left;
      height: @header-height;
      width: @header-left-width;
      padding-left: @header-padding;
    }

    .header-right {
      float: right;
      height: @header-height;
      width: @header-right-width;
      padding-right: @header-padding;

      .header-button {
        -webkit-app-region: no-drag;
        cursor: pointer;
        float: right;

        width: @header-button-size;
        height: @header-button-size;
        font-size: @header-button-size;
        line-height: @header-button-size - 1px;
        margin: ((@header-height - @header-button-size) / 2) 0;
        margin-left: @header-button-margin;
        text-align: center;
        border-radius: 1em;

        background: @light-black;
      }

      .minimize:hover {
        background-color: @warning;
      }

      .close:hover {
        background-color: @danger;
      }
    }
  }
</style>
