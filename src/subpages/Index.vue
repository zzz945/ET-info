<template>
  <div id="bd-box" class="bd-box">
    <div class="gsjj" v-on:click="subpage('/subpages/gsjj')">
      <p>公司简介</p>
    </div>
    <div class="qyln" v-on:click="subpage('/subpages/qyln')">
      <p>企业理念</p>
    </div>
    <div class="zyyw" v-on:click="subpage('/subpages/zyyw')">
      <p>主营业务</p>
    </div>
    <div class="hyfa" v-on:click="subpage('/subpages/hyfa')">
      <p>行业方案</p>
    </div>
    <div class="gsdt" v-on:click="subpage('/subpages/gsdt')">
      <p>公司动态</p>
    </div>
    <div class="lxfs" v-on:click="subpage('/subpages/lxfs')">
      <p>联系方式</p>
    </div>
    <div class="zpxx" v-on:click="subpage('/subpages/zpxx')">
      <p>招聘信息</p>
    </div>
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
    let viewHeight = screenHeight - titleHeight - footerHeight
    let view = document.getElementById('bd-box')
    view.style.height = viewHeight + 'px'
    console.log('ready')
  },
  methods: {
    subpage (path) {
      this.$route.router.go(path)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../styles/variable';
  @import '../styles/center';

  /* @font-face {
    font-family: 'minijianlingxin';
    src: url('../../../fonts/minijianlingxin/minijianlingxin.eot');
    src: url('../../../fonts/minijianlingxin/minijianlingxin.eot?#font-spider') format('embedded-opentype'), url('../../../fonts/minijianlingxin/minijianlingxin.woff') format('woff'), url('../../../fonts/minijianlingxin/minijianlingxin.ttf') format('truetype'), url('../../../fonts/minijianlingxin/minijianlingxin.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }*/
  
  .bd-box {
    width: 100vmin;
    position: absolute;
    overflow: auto;
    background-color: @theme-color-bg;
    font-family: @theme-font-title;
    font-size: 5vmin;
    color: #fff;
    .gsjj {
      font-family: @theme-font-title;
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 0;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
    .qyln {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 13vmin;
      left: 5vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
    .zyyw {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 13vmin;
      left: 65vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
    .hyfa {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 30vmin;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn2-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn2-bg-active.png);
      }
    }
    .gsdt {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 45vmin;
      left: 5vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
    .lxfs {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 45vmin;
      left: 65vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
    .zpxx {
      position: absolute;
      width: 30vmin;
      height: 25vmin;
      top: 60vmin;
      left: 35vmin;
      background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg.png);
      background-size: 30vmin 25vmin;
      color: #fff;
      .vux-center;
      &:active {
        background-image: url(http://tdkjgzh.applinzi.com/Public/et-info/img/btn-bg-active.png);
      }
    }
  }
</style>