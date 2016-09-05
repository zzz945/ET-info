<template>
  <div style="height:100%;">
    <loading :show="isLoading" text="努力" position="absolute">加载中</loading>
    <view-box v-ref:view-box>
      <div slot="header">
        <x-header :left-options="leftOptions" :transition="headerTransition" :title="title" @on-click-title="scrollTop"></x-header>
      </div>
      <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
    </view-box>
  </div>
</template>

<script>
import store from './vuex/store'
import { Loading, ViewBox, XHeader } from './components'

export default {
  components: {
    Loading,
    ViewBox,
    XHeader
  },
  store: store,
  vuex: {
    getters: {
      route: (state) => state.route,
      isLoading: (state) => state.isLoading,
      direction: (state) => state.direction
    }
  },
  methods: {
    scrollTop () {
      this.$refs.viewBox.$els.viewBoxBody.scrollTop = 0
    }
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.route.path !== '/'
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    title () {
      return this.route.path
    }
  }
}
</script>

<style lang="less">
  @import 'styles/index.less';
  @import './styles/weui/base/reset';
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  
  body {
    background-color: #fbf9fe;
  }
  
  .vux-title {
    vertical-align: middle;
    text-align: center;
    color: #04BE02;
    margin: 20px 10px 20px 10px;
  }
  
  .vux-notice {
    vertical-align: middle;
    text-align: center;
    color: #04BE02;
  }
  /**
* vue-router transition
*/
  
  .vux-pop-out-transition,
  .vux-pop-in-transition {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  
  .vux-pop-out-enter,
  .vux-pop-out-leave,
  .vux-pop-in-enter,
  .vux-pop-in-leave {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  
  .vux-pop-out-enter {
    animation-name: popInLeft;
  }
  
  .vux-pop-out-leave {
    animation-name: popOutRight;
  }
  
  .vux-pop-in-enter {
    perspective: 1000;
    animation-name: popInRight;
  }
  
  .vux-pop-in-leave {
    animation-name: popOutLeft;
  }
  
  @keyframes popInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes popOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  @keyframes popInRight {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes popOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>