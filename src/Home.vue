<template>
  <div>
    <box gap="10px 80px">
      <circle :percent="percent" :stroke-width="5" stroke-color="#002269">
        <span class="percent_font">{{percent}}%</span>
      </circle>
    </box>
    <box gap="10px 40px">
      <range :value.sync="percent" :min="0" :max="100" :range-bar-height="4"></range>
    </box>
    <p class="vux-title">一定难不住聪明的你</p>
  </div>
</template>

<script>
import { Box, Divider, Circle, Range } from './components'

const version = require('../package.json').version

export default {
  components: {
    Box,
    Divider,
    Circle,
    Range
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
<style lang="less" scoped>
  @import './styles/variable';
  .percent_font {
    color: @theme-color-dianjing;
    font-weight: 500;
    font-size: 32px;
  }
</style>