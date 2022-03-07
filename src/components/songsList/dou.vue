<template>
  <div class="songsList bg">
    <div class="list scroll">
      <div class="item hover" v-for="(item,index) in list" key="index" @click="play(index)">
        <span class="index">{{list.length-index}}</span>
        <span class="song">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getDou } from "../../api/index.js";
import {player} from '../../util/index.js'

const list = ref([]); //抖音歌曲列表

getDou_()

//播放控制
function play(index){
  player.start(list.value[index].res.musicUrl)
}


//获取抖音音乐
function getDou_() {
  let list_ = localStorage.getItem("douSongs");
  if (list_) {
    list.value = JSON.parse(list_);
  } else {
    getDou().then((res) => {
      list.value = res.data.data;
      localStorage.setItem("douSongs", JSON.stringify(res.data.data));
    });
  }
}
</script>

<style scoped lang="less">
.songsList{
  width: 20vw;
  height: 40vh;
  padding: 5px;
  .list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .item{
      display: flex;
      height: 100px;
      .index{
        line-height: 100px;
      }
    }
  }
}
</style>