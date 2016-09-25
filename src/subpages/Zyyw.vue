<template>
    <div id="scroll-box" class="scroll-box">
      <p style="text-align: center; margin: 1em; line-height: 1.5em;">
        微信公众号开发运营
      </p>
      <p style="text-align: center; margin: 1em; line-height: 1.5em;">
        网站开发及运营服务
      </p>
      <p style="text-align: center; margin: 1em; line-height: 1.5em;">
        微信营销及广告服务
      </p>
    </div>
</template>

<script>
import { Divider } from '../components'

export default {
  components: {
    Divider
  },
  ready () {
    let screenHeight = document.getElementById('app-bd-box').offsetHeight
    let titleHeight = document.getElementById('app-title-box').offsetHeight
    let footerHeight = document.getElementById('app-footer-box').offsetHeight
    let viewHeight = screenHeight - titleHeight - footerHeight - footerHeight / 2
    let view = document.getElementById('scroll-box')
    view.style.height = viewHeight + 'px'
    console.log('ready')
  }
}
</script>
<style lang="less" scoped>
  @import '../styles/variable';
</style>