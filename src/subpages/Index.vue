<template>
  <!-- <div class="font-color">
    <grids class="grids_text">
      <grid v-for="item in list" :router-link="{path: item.url}" :image-url="item.image" :label="item.text"></grid>
    </grids>
  </div>  -->
  <div class="bd-box">
    <div class="gsjj">
      <p>公司简介</p>
    </div>
    <div class="qyln">
      <p>企业理念</p>
    </div>
    <div class="zyyw">
      <p>主营业务</p>
    </div>
    <div class="hyfa">
      <p>行业方案</p>
    </div>
    <div class="gsdt">
      <p>公司动态</p>
    </div>
    <div class="lxfs">
      <p>联系方式</p>
    </div>
    <div class="zpxx">
      <p>招聘信息</p>
    </div>
  </div>
</template>

<script>
import { Grids, Grid } from '../components'

export default {
  components: {
    Grids,
    Grid
  },
  data () {
    return {
      list: [{
        text: '公司简介',
        url: '/subpages/gsjj',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/home.png'
      }, {
        text: '企业理念',
        url: '/subpages/qyln',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/qyln.png'
      }, {
        text: '主营业务',
        url: '/subpages/zyyw',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/zyyw.png'
      }, {
        text: '公司动态',
        url: '/subpages/gsdt',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/gsdt.png'
      }, {
        text: '行业方案',
        url: '/subpages/hyfa',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/hyfa2.png'
      }, {
        text: '商务合作',
        url: '/subpages/swhz',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/swhz.png'
      }, {
        text: '留言板',
        url: '/subpages/lyb',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/lyb.png'
      }, {
        text: '联系方式',
        url: '/subpages/lxfs',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/phone.png'
      }, {
        text: '招聘信息',
        url: '/subpages/zpxx',
        image: 'http://tdkjgzh.applinzi.com/Public/et-info/img/user3.png'
      }]
    }
  },
  ready () {
    console.log('ready')
  },
  methods: {
    helloWorld () {
      console.log('helloWorld')
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../styles/variable';
  @import '../styles/index';
  .grids_text {
    color: @theme-color-text;
  }
  
  .bd-box {
    width: 100vmin;
    height: 100vmin;
    position: absolute;
    background-color: @theme-color-bg;
    font-size: 5vmin;
    font-weight: 1000;
    color: #fff;
    .gsjj {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 0;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      .vux-center;
    }
    .qyln {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 15vmin;
      left: 5vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      .vux-center;
    }
    .zyyw {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 15vmin;
      left: 65vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      .vux-center;
    }
    .hyfa {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 35vmin;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn2-bg.png);
      background-size: cover;
      .vux-center;
    }
    .gsdt {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 50vmin;
      left: 5vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      .vux-center;
    }
    .lxfs {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 50vmin;
      left: 65vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      .vux-center;
    }
    .zpxx {
      position: absolute;
      width: 30vmin;
      height: 30vmin;
      top: 70vmin;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: cover;
      color: #fff;
      .vux-center;
    }
  }
</style>