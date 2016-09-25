<template>
  <div id="scroll-box" class="scroll-box">
    <scroller lock-x scrollbar-y :height="scrollerHeight">
      <div style="overflow: hidden;">
        <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
          ET互联专注于为客户提供极致的移动互联网应用与服务。</p>
        <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
          发展至今，凭借着优秀的创业团队、丰富的开发经验、先进的产品设计理念、快速的市场反应能力以及“诚信为本，服务至上”的合作宗旨，为多家政府、企事业单位和个体商户提供了超出用户期待的产品价值。</span>
        </p>
        <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
          目前正在合作的业务有：基于微信为政府和企业提供开发、运营、培训、推广一体化解决方案，帮助政府和企业实现线上线下互通（O2O）。</span>
        </p>
        <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
          目前业务发展方向有:“互联网+政府”、“互联网+医院”、“互联网+餐厅”、“互联网+KTV”、“互联网+酒店”等行业解决方案。</span>
        </p>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller } from '../components'

export default {
  components: {
    Scroller
  },
  data () {
    return {
      scrollerHeight: ''
    }
  },
  methods: {
    scrollerHeight () {
      return this.scrollerHeight
    }
  },
  ready () {
    let screenHeight = document.getElementById('app-bd-box').offsetHeight
    let titleHeight = document.getElementById('app-title-box').offsetHeight
    let footerHeight = document.getElementById('app-footer-box').offsetHeight
    let viewHeight = screenHeight - titleHeight - footerHeight - footerHeight / 2
    let view = document.getElementById('scroll-box')
    view.style.height = viewHeight + 'px'
    this.scrollerHeight = viewHeight + 'px'
    console.log('gsjj ready:' + this.scrollerHeight)
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/variable';
</style>