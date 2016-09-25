<template>
  <div id="scroll-box" class="scroll-box">
    <p style="margin: 1em; text-align: center;">
      暂无
    </p>
  </div>
</template>

<script>

export default {
  components: {
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