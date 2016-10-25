<template>

  <div class="slider">
      <router-link
        tag="div"
        v-for="button in buttons"
        :to="button.link"
        active-class="slider-button-active"
        class="slider-button">
        {{ button.name }}
      </router-link>
  </div>

</template>
<script>
  export default{
    props: ['buttons']
  }
</script>

<style lang="less" scoped>
  @import '../assets/layout.less';
  @import '../assets/color.less';

  .slider {
    height: @slider-height;
    width: @slider-width;
    background-color: @light-black;

    .slider-button {
      -webkit-user-select:none;
      cursor: default;
      text-align: center;
      width: @slider-width;
      font-size: @slider-font-size;
      color: @silver;
      padding: @slider-button-padding 0;
    }

    .slider-button-active {
      background-color: @white;
      color: @light-black;
      @radius: .5em;
      border-radius: @radius 0 0 @radius;
    }
  }
</style>
