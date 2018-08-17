<template>
  <div class="m-header">
    <div class="nav">
      <div class="item">
        <router-link to="/login">
          <img src="../../assets/menu.png" alt="" class="icon">
        </router-link>
      </div>
      <div class="item">
        <router-link to="/music">
          <img src="../../assets/music.png" alt="" class="icon">
        </router-link>
        <router-link to="/wangyi/recommend">
          <img src="../../assets/wangyi.png" alt="" class="icon">
        </router-link>
        <router-link to="/video">
          <img src="../../assets/video.png" alt="" class="icon">
        </router-link>
      </div>
      <div class="item">
        <router-link to="/search">
          <img src="../../assets/search.png" alt="" class="icon">
        </router-link>
      </div>
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
  background: $theme;
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
}
</style>
