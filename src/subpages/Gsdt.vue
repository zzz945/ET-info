<template>
  <div class="font-color">
    <p style="margin: 20px; text-align: center;">
      <span style="font-family: 楷体, 楷体_GB2312, SimKai; font-size: 16px;">开发中</span>
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