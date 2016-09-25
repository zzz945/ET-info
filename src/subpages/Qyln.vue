<template>
  <div id="scroll-box" class="scroll-box">
    <p style="text-align: center; margin: 1em; line-height: 1.5em;">
      发展理念：海纳百川，顺势而行
    </p>
    <p style="text-align: center; margin: 1em; line-height: 1.5em;">
      服务理念：己所不欲，勿施于人
    </p>
    <p style="text-align: center; margin: 1em; line-height: 1.5em;">
      技术理念：大道至简，其命惟新
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