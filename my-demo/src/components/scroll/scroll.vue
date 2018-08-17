<template>
  <div class="scroll">
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'
import Component from 'vue-class-component'
import {getBanner} from '../../api/recommend'
import {ERR_OK} from '../../common/js/config'

@Component({})

export default class Scroll extends Vue{

  banner: any[] = [];
  
  created () {
    
  }

  mounted(){
      // new Swiper ('.swiper-container', {
      //   loop: true,
      //   pagination: '.swiper-pagination',
      // })        
  }
  
  
}
</script>

