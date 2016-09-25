<template>
  <div class="vux-header">
    <div class="vux-header-left">
      <div class="left-arrow" @click="onClickBack" v-show="leftOptions.showBack" :transition="transition"></div>
      <slot name="left"></slot>
    </div>
    <h1 class="vux-header-title" @click="$emit('on-click-title')"><span v-show="title" :transition="transition">{{title}}</span>
      <slot></slot>
    </h1>
    <div class="vux-header-right">
      <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  methods: {
    onClickBack () {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        history.back()
      }
    }
  }
}
</script>

<style lang="less">
  @import '../../styles/variable.less';
  .vux-header {
    position: absolute;
    background-color: @x-header-background-color;
    width: 100vmin;
    height: 8vmin;
    .vux-header-title {
      position: absolute;
      left: 25vmin;
      width: 50vmin;
      height: 8vmin;
      line-height: 8vmin;
      text-align: center;
      font-size: 4vmin;
      color: @x-header-title-color;
    }
    .vux-header-left {
      .left-arrow {
        position: absolute;
        width: 8vmin;
        height: 8vmin;
        &:before {
          content: "";
          position: absolute;
          width: 3vmin;
          height: 3vmin;
          border: 1vmin solid @x-header-arrow-color;
          border-width: 1vmin 0 0 1vmin;
          transform: rotate(315deg);
          left: 2vmin;
          top: 2vmin;
        }
      }
    }
  }
</style>