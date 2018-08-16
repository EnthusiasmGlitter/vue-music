<template>
  <div class="m-header">
    <div class="nav">
      <div class="item">
        <router-link to="/login">
          <img src="../../assets/menu2.png" alt="" class="icon">
        </router-link>
      </div>
      <div class="item">
        <router-link to="/music">
          <img src="../../assets/music3.png" alt="" class="icon">
        </router-link>
        <router-link to="/wangyi">
          <img src="../../assets/wangyi.png" alt="" class="icon">
        </router-link>
        <router-link to="/video">
          <img src="../../assets/video.png" alt="" class="icon">
        </router-link>
      </div>
      <div class="item">
        <router-link to="/search">
          <img src="../../assets/search1.png" alt="" class="icon">
        </router-link>
      </div>
    </div>
    <div class="tab">
      <router-link class="tab-item" to="/recommend">
        <span>推荐</span>
      </router-link>
      <router-link class="tab-item" to="/friends">
        <span>朋友</span>
      </router-link>
      <router-link class="tab-item" to="/transceiver">
        <span>电台</span>
      </router-link>
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
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: $color-theme;
  padding-top: 10px;
  .nav{
    display: flex;
    justify-content: space-around;
    .item{
      display: flex;
      .icon{
        display: flex;
        width: 22px;
        height: 22px;
      }
      &:nth-child(2){
        a{
          .icon{
            margin: 0 15px;
          }
          &:first-child{
            .icon{
              width: 18px;
              height: 18px;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
  .tab{
  display: flex;
  line-height: 44px;
  height: 44px;
  width: 100%;
  background: $color-theme;
  .tab-item {
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: .875rem;
    span {
      padding-bottom: 3px;
    }
    &.router-link-active {
      span {
        font-weight: bold;
        color: $color-text-l;
        border-bottom: 2px solid $color-text-l
      }
    }
  }
}
}
</style>
