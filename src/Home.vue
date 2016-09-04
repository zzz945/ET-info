<template>
  <div>
    <h2 class="vux-title">ET互联</h2>
    <p class="vux-title">不识庐山真面目，只缘身在此山中</p>
  </div>
  <divider>第一关</divider>
  <box gap="10px 40px">
    <div class="et-circle-page">
      <circle :percent="percent" :stroke-width="5" stroke-color="#04BE02">
        <span>{{percent}}</span>
      </circle>
      <range :value.sync="percent" :min="0" :max="100"></range>
    </div>
  </box>
  <div>
    <p class="vux-title">一定难不住聪明的你</p>
  </div>
</template>

<script>
import { Alert, Box, Divider, Circle, Range, Icon } from './components'
import vConsole from 'vconsole'

const version = require('../package.json').version

export default {
  components: {
    Alert,
    Box,
    Divider,
    Circle,
    Range,
    Icon,
    vConsole
  },
  data () {
    return {
      version: version,
      percent: 0
    }
  },
  ready () {
    console.log('ready')
  },
  watch: {
    'percent': function (val, oldVal) {
      if (val === 100) {
        console.log('percent 100')
        this.$route.router.go('/subpages/index')
      }
    }
  },
  methods: {
    helloWorld () {
      console.log('helloWorld')
    }
  }
}
</script>

<style>
  .et-circle-page {
    text-align: center;
  }
  
  .bottom-pos {
    width: 100%;
    position: absolute;
    bottom: 5px;
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
  
  body {
    font-family: Helvetica, sans-serif;
    background-color: #fbf9fe;
  }
</style>