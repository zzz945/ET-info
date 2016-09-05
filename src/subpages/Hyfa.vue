<template>
  <div>
    <h2 class="vux-title">ET互联</h2>
    <p class="vux-title">青青子衿，悠悠我心，但为君故，沉吟至今</p>
  </div>
  <divider>行业方案</divider>
  <div style="margin: 10px;overflow: hidden;" v-for="item in list_on">
    <masker style="border-radius: 2px;" :opacity="0.3" color="04BE02"  @click="onClick(item)">
      <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
      <div slot="content" class="m-title">
        {{item.title}}
        <br/>
        <span class="m-subtitle">正式发布</span>
      </div>
    </masker>
  </div>
  <div style="margin: 10px;overflow: hidden;" v-for="item in list_off">
    <masker style="border-radius: 2px;" :opacity="0.8">
      <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
      <div slot="content" class="m-title">
        {{item.title}}
        <br/>
        <span class="m-subtitle">敬请期待</span>
      </div>
    </masker>
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
        url: 'http://mp.weixin.qq.com/s?__biz=MzIzODUzMzY0NA==&mid=100000002&idx=1&sn=c8935aec971926bed01ace578d1dd7a7&scene=0#wechat_redirect'
      }, {
        title: '移动互联餐厅解决方案',
        img: 'http://tdkjgzh.applinzi.com/Public/et-info/img/restaurant.jpg',
        url: 'http://mp.weixin.qq.com/s?__biz=MzIzODUzMzY0NA==&mid=100000007&idx=1&sn=3e919f23174017b93a10ba284b6351a6&scene=0#wechat_redirect'
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
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-subtitle {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
