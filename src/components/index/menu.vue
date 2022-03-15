<template>
  <div class='menu'>

    <div class="item">
      <span class="tip">自定义位置</span>
      <div class="right">
        <mswitch class="switch_" :flag="false"  @change="(e)=>state.isOpenAnchor.value = e.flag  "/>
      </div>
    </div>

    <div class="item" v-for="(v,i) in list" :key="i">
      <span class="tip">{{v}}</span>
      <div class="right">
        <mswitch class="switch_" :flag="state.show.value[attr[i]]" :index="i" @change="showChange"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,toRaw } from "vue";
import mswitch from '@/components/widgets/switch.vue'
import {state} from '@/util/state.js'

let list = ['128乐器','环绕音效','3D背景','抖音列表','网易云列表','歌词','评论','播放控制']
let attr = ['piano','effect','three','dou','net','lyric','comments','control']

function showChange(e){
  state.show.value[attr[e.index]] = e.flag
  localStorage.setItem('show',JSON.stringify(toRaw(state.show.value)))
}

</script>

<style scoped lang="less">
.menu {
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(37, 37, 37);
  color: black;
  text-shadow: none;
  .item {
    display: flex;
    height: 6vh;
    line-height: 6vh;
    padding-left: 10px;
    .tip {
      flex: 3;
      line-height: 6vh;
    }
    .right{
      flex: 1;
      height: 100%;
      display: flex;
      .switch_{
        margin: auto;
      }
    }
  }
}
</style>