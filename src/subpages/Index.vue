<template>
  <div>
    <h2 class="vux-title">ET互联</h2>
    <p class="vux-title">青青子衿，悠悠我心，但为君故，沉吟至今</p>
  </div>
  <divider>首页</divider>
  <br>
  <grids>
    <grid v-for="item in list" :router-link="{path: item.url}" :image-url="item.image" :label="item.text"></grid>
  </grids>
</template>

<script>
import { Alert, Box, Divider, Circle, Range, Icon, Grids, Grid } from '../components'
import vConsole from 'vconsole'

export default {
  components: {
    Alert,
    Box,
    Divider,
    Circle,
    Range,
    Icon,
    Grids,
    Grid,
    vConsole
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