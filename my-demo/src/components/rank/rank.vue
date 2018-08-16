<template>
  <div class="rank">
    <div class="title">
      <img src="../../assets/left.png" alt="" @click="goback">
      <span>排行榜</span> 
    </div>
    <div class="official-rank">
      <div class="caption">官方榜</div>
      <ul>
        <li class="item"  v-for="item in yunTopList" :key="item.id" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.coverImgUrl" width="100" height="100">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.top" :key="index">
              <span>{{index + 1}}.</span>
              <span>{{song.name}} - {{song.ar[0].name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="global-rank">
      <div class="global">全球榜</div>
      <ul>
        <li class="item" v-for="items in globaToplList" :key="items.id">
          <div class="icon">
            <img v-lazy="items.coverImgUrl">
          </div>
          <p class="play-count">
            每周五更新
          </p>
          <div class="text">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getTop } from "../../api/rank";
import { ERR_OK } from "../../common/js/config";

const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23];
const GLOBAL_TOP = [8, 4, 5, 6, 14, 18, 21, 9, 22, 11, 12];

@Component({})
export default class Rank extends Vue {
  yunTopList: any[] = [];
  globaToplList: any[] = [];

  created() {
    this._getTopList();
    this._getGlobaList();
  }

  _getTopList() {
    for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
      getTop(YUNMUSIC_TOP[i]).then(res => {
        if (res.status === ERR_OK) {
          let list = res.data.playlist;
          list.top = res.data.playlist.tracks.slice(0, 3);
          console.log(list);
          this.yunTopList.push(list);
        } else {
          console.error("getTopList 获取失败");
        }
      });
    }
  }

  _getGlobaList() {
    for (let i = 0; i < GLOBAL_TOP.length; i++) {
      getTop(GLOBAL_TOP[i]).then(res => {
        if (res.status === ERR_OK) {
          let list = res.data.playlist;
          console.log(list);
          this.globaToplList.push(list);
        } else {
          console.log("getGlobaList 获取失败");
        }
      });
    }
  }

  goback() {
    this.$router.go(-1);
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable";
@import "../../common/scss/mixin";
@import "../../common/scss/reset";

.rank {
  width: 100%;
  top: 88px;
  bottom: 0;
  .title {
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: fixed;
    background: $color-theme;
    display: block;
    img {
      width: 22px;
      height: 22px;
      vertical-align: text-top;
      padding: 0 5px 0 10px;
    }
    span {
      font-size: 1rem;
      color: $title-defalut;
    }
  }
  .official-rank{
     .caption {
      font-size: 0.9375rem;
      font-weight: bold;
      padding: 57px 0 12px 3%;
    }
    .item {
      display: flex;
      margin: 0 10px;
      padding: 3px 0;
      height: 100px;
      border-bottom: 1px solid rgb(228, 228, 228);
      &:last-child {
        padding-bottom: 20px;
      }
      .icon {
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
      }
      .songlist {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        height: 100px;
        overflow: hidden;
        font-size: 0.875rem;
        .song {
          @include no-wrap();
          line-height: 30px;
        }
      }
    }
  }
  .global-rank{
    .global {
      font-size: 0.9375rem;
      font-weight: bold;
      padding: 36px 0 12px 3%;
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
      .play-count {
        position: absolute;
        bottom: 25px;
        left: 8px;
        font-size: .625rem;
        color: $color-text-l;
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
  

  
  
  

  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .loading-content {
    position: fixed;
    width: 100%;
    top: 70%;
    transform: translateY(-50%);
  }
}
</style>


