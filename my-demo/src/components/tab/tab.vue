<template>
  <div class="tab">
    <router-link class="tab-item" to="/wangyi/recommend">
      <span>推荐</span>
    </router-link>
    <router-link class="tab-item" to="/wangyi/friends">
      <span>朋友</span>
    </router-link>
    <router-link class="tab-item" to="/wangyi/transceiver">
      <span>电台</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})

export default class tab extends Vue{

}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/reset";

.tab{
  width: 100%;
  height: 44px;
  position: fixed;
  top: 32px;
  display: flex;
  line-height: 44px;
  background: $theme;
  z-index: 1;
  .tab-item {
    flex: 1;
    text-align: center;
    color: $white;
    font-size: .875rem;
    span {
      padding-bottom: 3px;
    }
    &.router-link-active {
      span {
        font-weight: bold;
        color: $border-white;
        border-bottom: 2px solid $border-white
      }
    }
  }
}
</style>

