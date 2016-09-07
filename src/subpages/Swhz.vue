<template>
  <div class="font-color">
    <p style='margin: 20px; text-indent: 2em; line-height: 1.5em;'>
      <span style='font-family: 楷体, 楷体_GB2312, SimKai; font-size: 16px;'>ET互联本着开放包容的发展理念，欢迎资本合作、技术合作以及跨界合作。</span>
    </p>
  </div>
</template>

<script>
import { Divider } from '../components'

export default {
  components: {
    Divider
  }
}
</script>
<style lang="less" scoped>
  @import '../styles/variable';
  .font-color {
    color: @theme-color-text;
  }
</style>