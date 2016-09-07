<template>
  <div class="font-color">
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