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

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
})

export default class App extends Vue {
  
}
</script>

<style>
@import './common/scss/index.scss';
#app {
  
}
</style>
