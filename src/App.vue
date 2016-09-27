<template>
  <div id="app-bd-box">
    <loading :show="isLoading" text="努力" position="absolute">加载中</loading>
    <div id="app-header-box">
      <x-header :left-options="leftOptions" :title="title" @on-click-title="scrollTop"></x-header>
    </div>
    <div id="app-title-box">
      <div id="app-logo"></div>
      <div id="app-title">互联</div>
    </div>
    <router-view></router-view>
    <div id="app-footer-box">
      <p>统一社会信用代码：91211321MAQFG6473</p>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import { Loading, XHeader } from './components'
import wx from 'we-jssdk'
// import Vconsole from 'vconsole'

export default {
  components: {
    Loading,
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
    width: 100vmin;
    overflow-x: hidden;
  }
  
  body {
    background-color: @theme-color-bg;
  }
  
  .scroll-box {
    width: 92vmin;
    overflow: auto;
    border-radius: 5vmin;
    margin: 0 4vmin;
    color: @theme-color-text;
    background-color: @theme-color-fuzhu;
    font-size: 5vmin;
    font-family: @theme-font-text;
    font-weight: bold;
  }
  
  /* @font-face {
    font-family: 'minijianluobo';
    src: url('../../fonts/minijianluobo/minijianluobo.eot');
    src: url('../../fonts/minijianluobo/minijianluobo.eot?#font-spider') format('embedded-opentype'), url('../../fonts/minijianluobo/minijianluobo.woff') format('woff'), url('../../fonts/minijianluobo/minijianluobo.ttf') format('truetype'), url('../../fonts/minijianluobo/minijianluobo.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }*/
  
</style>

<style lang="less" scoped>
  @import './styles/variable';
  #app-bd-box {
    width: 100vmin;
    height: 100%;
    #app-header-box {
      position: absolute;
      top: 0;
      z-index: 100;
      width: 100vmin;
      height: 8vmin;
      font-family: @theme-font-title;
    }
    #app-title-box {
      width: 100vmin;
      height: 50vmin;
      background-color: @theme-color-bg;
      #app-logo {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/etlogo150-150.png);
        background-size: cover;
        margin-left: 20vmin;
        margin-top: 17vmin;
        /*(8+(42-25)/2)*/
        width: 25vmin;
        height: 25vmin;
        float: left;
      }
      #app-title {
        font-family: @theme-font-header;
        color: @theme-color-dianjing;
        font-size: 13vmin;
        margin-left: 5vmin;
        margin-top: 8vmin;
        line-height: 42vmin;
        float: left;
      }
    }
    #app-view-box {
      width: 100vmin;
    }
    #app-footer-box {
      background: @x-header-background-color;
      position: absolute;
      bottom: 0;
      width: 100vmin;
      height: 8vmin;
      line-height: 8vmin;
      font-size: 4vmin;
      text-align: center;
      color: @theme-color-text;
      font-family: @theme-font-title;
    }
  }
</style>