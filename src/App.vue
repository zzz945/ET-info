<template>
  <div class="bd-box">
    <loading :show="isLoading" text="努力" position="absolute">加载中</loading>
    <div class="header-box">
      <x-header :left-options="leftOptions" :title="title" @on-click-title="scrollTop"></x-header>
    </div>
    <div class="title-box">
      <div class="logo"></div>
      <div class="title">互联</div>
    </div>
    <router-view class="view-box"></router-view>
    <div class="footer_box">
      <p class="address">地址：辽宁省朝阳市朝阳县柳城街道龙山街四号</p>
      <p>统一社会信用代码91211321MAQFG6473</p>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import { Loading, XHeader, Masker, Tabbar, TabbarItem } from './components'
import wx from 'we-jssdk'
import Vconsole from 'vconsole'

export default {
  components: {
    Loading,
    XHeader,
    Masker,
    Tabbar,
    TabbarItem,
    Vconsole
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
        showBack: this.route.name !== '公司首页'
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-left' : 'vux-header-right'
    },
    viewTransition () {
      return this.direction === 'forward' ? 'vux-view-left' : 'vux-view-right'
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
        wx.onMenuShareTimeline({ title: 'ET互联：专注移动互联网应用开发，为传统行业注入创新基因；ET移动互联，为您省心省钱；ET匠心出品，必然打造精品。', // 分享标题
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
                                   desc: '专注移动互联网应用开发，为传统行业注入创新基因；ET移动互联，为您省心省钱；ET匠心出品，必然打造精品。', // 分享描述
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
<style>
  @import './styles/animate.min.css';
</style>
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
    background-color: @theme-color-bg;
  }
  
  .vux-title {
    vertical-align: middle;
    text-align: center;
    color: @theme-color-text;
    font-family: @bizFont;
    margin: 20px 10px 20px 10px;
  }
  
  .vux-notice {
    vertical-align: middle;
    text-align: center;
    color: @theme-color-text;
    font-family: @bizFont;
  }
  
  @font-face {
    font-family: wending-pop4;
    font-weight: normal;
    src: url('http://tdkjgzh.applinzi.com/Public/font/wending-pop4.TTF')format('ttf');
  }
  
  @font-face {
    font-family: wending-pop-new;
    font-weight: normal;
    src: url('http://tdkjgzh.applinzi.com/Public/font/wending-pop-new.ttf')format('ttf');
  }
  
  @font-face {
    font-family: wending-pili;
    font-weight: normal;
    src: url('http://tdkjgzh.applinzi.com/Public/font/wending-pili.TTF')format('ttf');
  }
  /**
* vue-router transition
*/
  
  .vux-view-left-transition,
  .vux-view-right-transition {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  
  .vux-view-left-enter,
  .vux-view-left-leave,
  .vux-view-right-enter,
  .vux-view-right-leave {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  /*.vux-pop-out-enter {
  animation-name: slideInLeft;
}
.vux-pop-out-leave {
  animation-name: slideOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: slideInRight;
}
.vux-pop-in-leave {
  animation-name: slideOutLeft;
}*/
  
  .vux-view-left-enter {
    animation-name: bounceInLeft;
  }
  
  .vux-view-left-leave {
    animation-name: bounceOutRight;
  }
  
  .vux-view-right-enter {
    perspective: 1000;
    animation-name: bounceInRight;
  }
  
  .vux-view-right-leave {
    animation-name: bounceOutLeft;
  }
  
  .vux-header-right-enter {
    animation: bounceInRight .5s;
  }
  
  .vux-header-left-enter {
    animation: bounceInLeft .5s;
  }
</style>

<style lang="less" scoped>
  @import './styles/variable';
  @import './styles/index.less';
  @import './styles/weui/weui.less';
  .header_box {
    border-bottom: 8px solid @theme-color-fuzhu;
  }
  
  .bd-box {
    width: 100vmin;
    height: 100%;
    .header-box {
      z-index: 100;
      width: 100%;
    }
    .title-box {
      width: 100vmin;
      height: 50vmin;
      background-color: #000000;
      .logo {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/etlogo150-150.png);
        background-size: cover;
        margin-left: 20vmin;
        margin-top: 10vmin;
        width: 30vmin;
        height: 30vmin;
        float: left;
      }
      .title {
        color: @theme-color-text;
        font-size: 15vmin;
        font-weight: 1000;
        margin-left: 5vmin;
        line-height: 50vmin;
        float: left;
      }
    }
    .view-box {
      width: 100vmin;
    }
    .footer_box {
      background: #34495e;
      position: absolute;
      bottom: 0;
      width: 100vmin;
      height: 14vmin;
      line-height: 5vmin;
      font-size: 3vmin;
      font-weight: 500;
      text-align: center;
      color: @theme-color-text;
      .address {
        margin-top: 2vmin
      }
    }
  }
</style>