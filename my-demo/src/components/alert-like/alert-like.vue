<template>
  <div class="alert-like">
    <div class="container">
      <div class="title">歌单：我喜欢的音乐</div>
      <div class="download">
        <img src="" alt="">
        <span>下载</span>
      </div>
      <div class="share">
        <img src="" alt="">
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})

export default class Alertlike extends Vue{
  
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/reset";
@import "../../common/scss/variable";

.alert-like{
  overflow: hidden;
  .container{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0 0;
    // background: $white;
    background: pink;
    padding: 70px 0;
    .title{
      display: flex;
      font-size: .75rem;
    }
    .download{
      img{

      }
      span{

      }
      }
    .share{
      img{

      }
      span{
        
      }
    }
  }
}
</style>
