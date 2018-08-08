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
          this.yunTopList.push(list)
        } else {
          console.error('getTopList 获取失败')
        }
      })
    }
  }
}
</script>

