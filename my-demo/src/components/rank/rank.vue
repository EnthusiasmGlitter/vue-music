<template>
  <div class="rank">
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {getTop} from '../../api/rank'
import { ERR_OK } from '../../common/js/config'

const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23]

@Component({})

export default class Rank  extends Vue{
  
  yunTopList: any[] =[]

  created () {
    this._getTopList()
  }

  _getTopList () {
    for(let i = 0; i < YUNMUSIC_TOP.length; i++) {
      getTop(YUNMUSIC_TOP[i]).then((res) => {
        if (res.status === ERR_OK) {
          let list = res.data.playlist
          list.top = res.data.playlist.tracks.slice(0, 3);
          this.yunTopList.push(list)
        } else {
          console.error('getTopList 获取失败')
        }
      })
    }
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
      img {
        border-radius: 3px;
      }
    }
    .songlist {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      height: 100px;
      overflow: hidden;
      font-size: .875rem;
      .song {
        @include no-wrap();
        line-height: 30px;
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


