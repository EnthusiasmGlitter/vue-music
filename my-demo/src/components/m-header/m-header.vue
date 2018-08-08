<template>
  <div class="m-header">
    <div class="item">
      <router-link to="/rank">
        <!-- <i class="iconfont icon-menu"></i> -->
        <img src="../../assets/menu.png" alt="" class="icon">
      </router-link>
    </div>
    <div class="item">
      <!-- <router-link> -->
        <!-- <i class="iconfont icon-music"></i> -->
        <img src="../../assets/music1.png" alt="" class="icon">
      <!-- </router-link> -->
      <!-- <router-link> -->
        <!-- <i class="iconfont icon-wangyiyunyinyuemusic1193417easyiconnet"></i> -->
        <img src="../../assets/wangyi.png" alt="" class="icon">
      <!-- </router-link> -->
      <!-- <router-link> -->
        <!-- <i class="iconfont icon-video"></i> -->
        <img src="../../assets/video.png" alt="" class="icon">
      <!-- </router-link> -->
    </div>
    <div class="item">
      <!-- <router-link> -->
        <!-- <i class="iconfont icon-search"></i> -->
        <img src="../../assets/search.png" alt="" class="icon">
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

export default class Mheader extends Vue{
  
}
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";

.m-header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
  background: $color-theme;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px 0;
  .item{
    display: flex;
    .icon{
      display: flex;
      width: 22px;
      height: 22px;
    }
  }
}
</style>
