<template>
  <div class="font-color">
    <p style="margin: 20px; text-align: center;">
      <span style="font-size: 16px; font-family: 楷体, 楷体_GB2312, SimKai;">业务部：王经理&nbsp;&nbsp;&nbsp;&nbsp;18642134123</span>
    </p>
    <p style="margin: 20px; text-align: center;">
      <span style="font-size: 16px; font-family: 楷体, 楷体_GB2312, SimKai;">技术部：张总监&nbsp;&nbsp;&nbsp;&nbsp;18504211831</span>
    </p>
    <p style="margin: 20px; text-align: center;">
      <span style="font-size: 16px; font-family: 楷体, 楷体_GB2312, SimKai;">邮 &nbsp;箱： &nbsp; &nbsp; 642010820@qq.com</span>
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