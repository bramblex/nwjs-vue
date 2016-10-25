<template>
    <div class="content">
      <slot></slot>
    </div>
</template>
<style lang="less" scoped>
  @import '../assets/layout.less';
  @import '../assets/color.less';
  .content {
    height: @content-height - @content-margin-vertical * 2;
    width: @content-width - @content-margin-horizontal * 2;
    margin: @content-margin-vertical @content-margin-horizontal;
  }
</style>
