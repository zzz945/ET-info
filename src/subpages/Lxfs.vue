<template>
  <div id="scroll-box" class="scroll-box">
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      业务部：王经理&nbsp;&nbsp;<a href="tel:18642134123">18642134123</a>
    </p>
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      技术部：张总监&nbsp;&nbsp;<a href="tel:18504211831">18504211831</a>
    </p>
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      邮&nbsp;&nbsp;箱：642010820@qq.com
    </p>
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      QQ&nbsp;&nbsp;群：317571480
    </p>
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      地&nbsp;&nbsp;址：辽宁省朝阳市朝阳县柳城街道龙山街四号
    </p>
    <p style='text-indent: 2em; margin: 1em; line-height: 1.5em;'>
      邮&nbsp;&nbsp;编：122000
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