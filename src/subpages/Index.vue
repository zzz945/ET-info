<template>
  <div class="font-color">
    <grids class="grids_text">
      <grid v-for="item in list" :router-link="{path: item.url}" :image-url="item.image" :label="item.text"></grid>
    </grids>
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
  .grids_text {
    color: @theme-color-text;
  }
</style>
