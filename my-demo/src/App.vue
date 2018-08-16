<template>
  <div id="app">
    <!-- keep-alive主要用于保留组件状态或避免重新渲染。 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import MHeader from '@/components/m-header/m-header.vue'
// import Tab from '@/components/tab/tab.vue'
// import Scroll from '@/components/scroll/scroll.vue'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // components: {
  //   MHeader,
  //   Tab,
  // }
})
export default class App extends Vue {
  
}
</script>

<style>
@import './common/scss/index.scss';
#app {
  
}
</style>
