<template>
  <div class="transceiver">
    <div class="transceiver-type">
      <router-link to="/fm">
        <div class="icon-type">
          <img src="../../assets/radio.png" alt="">
          <span>电台分类</span>
        </div>
      </router-link>
      <router-link to="/push">
        <div class="icon-type">
          <img src="../../assets/calendar.png" alt="">
          <span>电台排榜</span>
        </div>
      </router-link>
      <router-link to="/song">
        <div class="icon-type">
          <img src="../../assets/song.png" alt="">
          <span>付费精品</span>
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="icon-type">
          <img src="../../assets/rank.png" alt="">
          <span>小冰电台</span>
        </div>
      </router-link>
    </div>
    <div class="preferred">
      <div class="subtitle">
        <span>今日优选</span>
        <span><img src="../../assets/change.png" alt="" class="switch"> 换一换</span>
      </div>
    </div>
    <alert-like></alert-like>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Alertlike from "../alert-like/alert-like.vue";

@Component({
  components: {
    Alertlike,
  }
})
export default class transceiver extends Vue {
  
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/reset";
.transceiver {
  .transceiver-type {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .icon-type {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: flex;
        width: 50px;
        height: 50px;
      }
      span {
        display: flex;
        font-size: 0.625rem;
        color: $text-defalut;
        font-weight: bold;
        padding: 8px 0 12px 0;
      }
    }
  }
  .preferred {
    width: 100%;
    .subtitle {
      width: 94.6%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      span {
        position: relative;
        display: flex;
        &:first-child {
          font-size: 0.875rem;
          color: $sub-text;
          font-weight: bold;
        }
        &:last-child {
          font-size: 0.625rem;
          color: $grey2;
        }
        em {
          position: absolute;
          top: 0;
          left: 0;
        }
        .switch {
          width: 12px;
          height: 12px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>


