<!--<template>
  <div class="scroll">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner"><img :src="item.room_src" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>-->

<!--<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'
import Component from 'vue-class-component'
import {getBanner} from '../../api/recommend'
import {ERR_OK} from '../../common/js/config'

@Component({})

export default class Scroll extends Vue{

  banner: any[] = [];
  
  created () {
    this._getBanner()
  }

  mounted(){
     new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })        
  }
  
  _getBanner () {
    getBanner().then((res) => {
      if(res.status === ERR_OK){
        let list = res.data.banners
        this.banner = list.splice(4);
      } else {
        console.error("Banner获取失败")
      }
    })
  }
}
</script>-->

