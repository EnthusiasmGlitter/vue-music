<template>
  <div class="recommend">
    <div class="recommend-list" ref="recommendList">
      <h1 class="title">推荐歌单</h1>
      <ul>
        <li class="item" v-for="item in playList.slice(0, 6)" :key="item.id">
          <div class="icon">
            <div class="gradients"></div>
            <img v-lazy="item.picUrl">
          </div>
          <p class="play-count">
            <img src="../../assets/headset.png" alt="" class="headset">
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
      <!-- <ul>
        <li class="item" v-for="item in recommendMusic" :key="item.id">
          <div class="icon">
            <img v-lazy="item.image">
          </div>
            <p class="text">{{item.name}}</p>
            <p class="singer">{{item.singer}}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getRecommendList, getRecommendMusic } from "../../api/recommend";
import { ERR_OK } from "../../common/js/config";
import { createRecommendSong, SongCreator, songInterface} from "../../common/js/song";
import { mapMutations, mapActions } from "vuex";

@Component({})
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
        this.playList = res.data.result;
        console.log(this.playList);
      } else {
        console.error("getRecommendList 获取失败");
      }
    });
  }

  _getRecommendMusic(): void {
    getRecommendMusic().then(res => {
      if (res.status === ERR_OK) {
        let list = res.data.result.map((item: Array<any>) => {
          //  console.log(createRecommendSong([],'item', 'item'));
           console.log(item)
        })
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
  .recommend-list {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    .title {
      height: 65px;
      line-height: 65px;
      padding-left: 1.5%;
      text-align: left;
      font-size: $f14;
      font-weight: bold;
      color: $color-text;
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
        font-size: $f10;
        color: $color-text-l;
      }
      .headset{
        width: 15px;
        height: 15px;
        vertical-align: middle;
      }
      .text {
        float: left;
        line-height: 16px;
        text-align: left;
        height: 40px;
        line-height: 16px;
        overflow: hidden;
        margin-bottom: 10px;
        font-size: $f11;
      }
    }
  }
  .recommend-song {
    margin-top: -20px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    .title {
      height: 65px;
      line-height: 65px;
      padding-left: 1.5%;
      text-align: left;
      font-size: $f14;
      font-weight: bold;
      color: $color-text;
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
        font-size: $f11;
      }
      .singer {
        line-height: 16px;
        margin-bottom: 10px;
        text-align: left;
        @include no-wrap();
        font-size: $f11;
        color: $color-text-g;
      }
    }
  }
}
</style>
