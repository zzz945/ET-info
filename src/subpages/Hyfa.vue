<template>
  <div style="margin-bottom:9vmin;">
    <div style="margin: 1vmin;overflow: hidden;" v-for="item in list_on">
      <masker style="border-radius: 2px;" :opacity="0.8" color="3498db" @click="onClick(item)">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-subtitle">正式发布</span>
        </div>
      </masker>
    </div>
    <div style="margin: 1vmin ;overflow: hidden;" v-for="item in list_off">
      <masker style="border-radius: 2px;" :opacity="0.8">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-subtitle">敬请期待</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
import { Divider, Masker } from '../components'
import { go } from '../libs/router'

export default {
  components: {
    Divider,
    Masker
  },
  data () {
    return {
      list_on: [{
        title: '移动互联政务解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/gov.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzI4OTQ3NzExOQ==&mid=100000001&idx=1&sn=ad6577fabbf70388878f4d84b3fc0c2f&chksm=6c2fd9915b5850874337a50ec737ba4cdbe2b23d25c67b11544dd06de1da9b4961ae1684af6d&scene=0#wechat_redirect'
      }, {
        title: '移动互联餐厅解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/restaurant.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzI4OTQ3NzExOQ==&mid=100000004&idx=1&sn=7349046984e9650eb63e1bf81049c05c&chksm=6c2fd9945b58508204a2b4e4cb8d77dc339f37c0ac632a417fda73290546430bb845e56de7a8&scene=0#wechat_redirect'
      }],
      list_off: [{
        title: '移动互联医院解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/hospital.jpg',
        url: ''
      }, {
        title: '移动互联KTV解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/ktv.jpg',
        url: ''
      }, {
        title: '移动互联酒店解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/hotel.jpg',
        url: ''
      }]
    }
  },
  methods: {
    onClick (item) {
      console.log(item)
      go(item.url, this.$router)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/variable';
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
  }
  
  .m-title {
    color: #fff;
    font-size: 5vmin;
    font-family: @theme-font-text;
    font-weight: bold;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .m-subtitle {
    font-size: 3vmin;
    font-family: @theme-font-text;
    font-weight: bold;
    padding-top: 1vmin;
    display: inline-block;
    margin-top: 1vmin;
  }
  
</style>