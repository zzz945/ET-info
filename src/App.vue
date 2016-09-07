<template>
  <div style="height:100%;">
    <loading :show="isLoading" text="努力" position="absolute">加载中</loading>
    <view-box v-ref:view-box>
      <div class="vux-demo-header-box" slot="header">
        <x-header :left-options="leftOptions" :transition="headerTransition" :title="title" @on-click-title="scrollTop"></x-header>
      </div>
      <div style="padding-top: 46px;">
          <masker :opacity="0" class="header_box">
            <div class="m-img" :style="{backgroundImage: 'url(' + bg_img + ')'}"></div>
            <div slot="content" class="m-title">
              ET互联
              <br/>
              <span class="m-subtitle">青青子衿 悠悠我心 但为君故 沉吟至今</span>
            </div>
          </masker>
        <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
      </div>
      <div slot="bottom" class="footer_box vux-center">
        <p>地址：朝阳县创业孵化基地 邮编：122000</p>
      </div>
    </view-box>
  </div>
</template>

<script>
import store from './vuex/store'
import { Loading, ViewBox, XHeader, Masker, Tabbar, TabbarItem } from './components'
import wx from 'we-jssdk'

export default {
  components: {
    Loading,
    ViewBox,
    XHeader,
    Masker,
    Tabbar,
    TabbarItem
  },
  store: store,
  vuex: {
    getters: {
      route: (state) => state.route,
      isLoading: (state) => state.isLoading,
      direction: (state) => state.direction
    }
  },
  data () {
    return {
      bg_img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/bg2.jpg'
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
        showBack: this.route.name !== '关卡'
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'fadeLeft' : 'fadeRight'
    },
    viewTransition () {
      return this.direction === 'forward' ? 'slideLeft' : 'slideLeft'
    },
    title () {
      return this.route.name
    }
  },
  ready () {
    // GET /someUrl
    this.$http.get('http://tdkjgzh.applinzi.com/home/gsjj/getSignPackage').then((response) => {
      var result = JSON.parse(response.data)
      console.log('getSignPackage:' + response.data)

      wx.config({
        debug:	false,
        appId:	result.appId,
        timestamp:	result.timestamp,
        nonceStr:	result.nonceStr,
        signature:	result.signature,
        jsApiList:	['onMenuShareTimeline', 'onMenuShareAppMessage']
      })

      wx.ready(() => {
        console.log('wx.ready')
        wx.onMenuShareTimeline({ title: 'ET互联 专注为传统行业提供互联网+解决方案', // 分享标题
                                 link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxebde861f373a287b&redirect_uri=http://tdkjgzh.applinzi.com/home/gsjj/index&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect', // 分享链接
                                 imgUrl: 'http://tdkjgzh.applinzi.com/Public/et-info/img/bg1.jpg', // 分享图标
                                 success: function () {
                                   // 用户确认分享后执行的回调函数
                                   console.log('wx.onMenuShareTimeline')
                                 },
                                 cancel: function () {
                                   // 用户取消分享后执行的回调函数
                                 }})
        wx.onMenuShareAppMessage({ title: 'ET互联', // 分享标题
                                   desc: '专注为传统行业提供互联网+解决方案', // 分享描述
                                   link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxebde861f373a287b&redirect_uri=http://tdkjgzh.applinzi.com/home/gsjj/index&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect', // 分享链接
                                   imgUrl: 'http://tdkjgzh.applinzi.com/Public/et-info/img/bg1.jpg', // 分享图标
                                   type: '', // 分享类型,music、video或link，不填默认为link
                                   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                   success: function () {
                                     // 用户确认分享后执行的回调函数
                                     console.log('wx.onMenuShareAppMessage')
                                   },
                                   cancel: function () {
                                     // 用户取消分享后执行的回调函数
                                   }})
      })
    }, (response) => {
      console.log('get http://tdkjgzh.applinzi.com/home/gsjj/getSignPackage failed')
    })
  }
}
</script>

<style lang="less">
  @import 'styles/index.less';
  @import './styles/weui/base/reset';
  @import "./styles/vue-animate/src/vue-animate.less";
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  
  body {
    background-color: @theme-color-bg;
  }
  
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
  
  .vux-title {
    vertical-align: middle;
    text-align: center;
    color: @theme-color-text;
    margin: 20px 10px 20px 10px;
  }
  
  .vux-notice {
    vertical-align: middle;
    text-align: center;
    color: @theme-color-text;
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

<style lang="less" scoped>
  @import './styles/center';
  @import './styles/variable';
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
  }
  
  .m-title {
    color: @theme-color-text;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 32px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .m-subtitle {
    font-size: 16px;
    padding-top: 4px;
    border-top: 1px solid @theme-color-text;
    display: inline-block;
    margin-top: 5px;
  }
  
  .header_box {
    border-bottom: 8px solid @theme-color-fuzhu;
  }
  
  .footer_box {
    background: @theme-color-fuzhu;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    color: @theme-color-text;
  }
</style>