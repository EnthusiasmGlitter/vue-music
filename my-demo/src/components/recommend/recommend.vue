<template>
  <div class="recommend">
    <scroll></scroll>
    <div class="recommend-type">
      <router-link to="/fm">
        <div class="icon-type">
          <img src="../../assets/radio.png" alt="">
          <span>私人FM</span>
        </div>
      </router-link>
      <router-link to="/push">
        <div class="icon-type">
          <img src="../../assets/calendar.png" alt="">
          <span>每日推荐</span>
        </div>
      </router-link>
      <router-link to="/song">
        <div class="icon-type">
          <img src="../../assets/song.png" alt="">
          <span>歌单</span>
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="icon-type">
          <img src="../../assets/rank.png" alt="">
          <span>排行榜</span>
        </div>
      </router-link>
    </div>
    <div class="recommend-list" ref="recommendList">
      <h1 class="title">推荐歌单</h1>
      <ul>
        <li class="item" v-for="item in playList" :key="item.id">
          <div class="icon">
            <div class="gradients"></div>
            <img v-lazy="item.picUrl">
          </div>
          <p class="play-count">
            <img src="../../assets/music-acc.png" alt="" class="headset">
            {{Math.floor(item.playCount / 10000)}}万
          </p>
          <div class="text">
            <p class="name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="recommend-song" ref="recommendSong">
      <h1 class="title">最近新曲</h1>
      <ul>
        <li class="item" v-for="item in recommendMusic" :key="item.id">
          <div class="icon">
            <img v-lazy="item.song.album.picUrl">
          </div>
            <p class="text">{{item.song.album.name}}</p>
            <p class="singer">{{item.song.artists[0].name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Swiper from 'swiper'
import { getRecommendList, getRecommendMusic } from "../../api/recommend";
import { ERR_OK } from "../../common/js/config";
import Scroll from '../scroll/scroll.vue';

@Component({
  components: {
    Scroll
  }
})
export default class Recommend extends Vue {
  playList: any[] = [];
  recommendMusic: any[] = [];

  created() {
    this._getRecommendList();
    this._getRecommendMusic();
  }

 
  _getRecommendList(): void {
    getRecommendList().then(res => {
      if (res.status === ERR_OK) {
        // res.data就是返回的json对象
        // 至于后面的 result这个是由json的结构决定的
        this.playList = res.data.result.slice(0, 6);
        console.log(this.playList);
      } else {
        console.error("getRecommendList 获取失败");
      }
    });
  }

  _getRecommendMusic(): void {
    getRecommendMusic().then(res => {
      if (res.status === ERR_OK) {
        let list = res.data.result.slice(0, 6);
        this.recommendMusic = list;
      } else {
        console.error("getRecommendMusic 获取失败");
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/reset";
.recommend {
  margin-top: 76px;
  .recommend-type{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .icon-type{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        display: flex;
        width: 50px;
        height: 50px;
      }
      span{
        display: flex;
        font-size: .625rem;
        color: $text-defalut;
        font-weight: bold;
        padding: 8px 0 12px 0;
      }
    }
  }
  .recommend-list {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border-top: 1px solid $cutoff;
    .title {
      display: inline-block;
      font-size: .9375rem;
      font-weight: bold;
      color: $text-defalut;
      padding: 10px 0 15px 1.5%;
    }
    .item {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 33%;
      padding: 0 1%;
      .icon {
        position: relative;
        display: inline-block;
        width: 100%;
        margin-bottom: 5px;
        .gradients {
          position: absolute;
          top: 0;
          width: 100%;
          height: 35px;
          border-radius: 3px;
          background: linear-gradient(
            rgba(109, 109, 109, 0.4),
            rgba(255, 255, 255, 0)
          );
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
      .play-count {
        position: absolute;
        top: 5px;
        right: 8px;
        font-size: .625rem;
        color: $mark-white;
      }
      .headset{
        width: .875rem;
        height: .875rem;
        vertical-align: sub;
      }
      .text {
        float: left;
        line-height: 16px;
        text-align: left;
        line-height: 16px;
        overflow: hidden;
        margin-bottom: 10px;
        font-size: .625rem;
      }
    }
  }
  .recommend-song {
    margin-top: -20px;
    box-sizing: border-box;
    width: 100%;
    .title {
      display: inline-block;
      font-size: .9375rem;
      font-weight: bold;
      color: $text-defalut;
      padding: 10px 0 15px 1.5%;
    }
    .item {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 33%;
      padding: 0 1%;
      .icon {
        position: relative;
        display: inline-block;
        width: 100%;
        margin-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
      .text {
        line-height: 16px;
        text-align: left;
        height: 16px;
        @include no-wrap();
        font-size: .625rem;
      }
      .singer {
        line-height: 16px;
        margin-bottom: 10px;
        text-align: left;
        @include no-wrap();
        font-size: .625rem;
        color: $grey1;
      }
    }
  }
}
</style>
