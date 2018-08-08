<template>
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
  display: flex;
  line-height: 44px;
  height: 44px;
  width: 100%;
  font-size: $f14;
  background: $color-theme;
  .tab-item {
    // 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）
    flex: 1;
    // 垂直
    text-align: center;
    color: $color-text-lm;
    span {
      // display: inline-block;
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
</style>

