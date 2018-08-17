<template>
  <div class="wangyi">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import MHeader from '../m-header/m-header.vue'
import recommend from '../recommend/recommend.vue'
import tab from '../tab/tab.vue'

@Component({
  components: {
    MHeader,
    recommend,
    tab,
  }
})

export default class wangyi extends Vue{
  
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/reset";

.wangyi{
  width: 100%;
  overflow: hidden;
}
</style>