<template>
  <div class="singer">
    <h1>{{msg}}</h1>
    <list-view></list-view>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

export default class Singer extends Vue{

  msg: string = "singer"
  
}
</script>
