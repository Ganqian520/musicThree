<template>
  <div class="index">
    <three />
    <control class="control_" />
    <menugq class="menu_" @mouseleave="()=>isOpenMenu=false" 
      :style="{transform: isOpenMenu ? 'translate(0vw,0)' : 'translate(-15vw,0)'}"/>
    <dou class="dou_" />
    <netgq class="net_" v-if="state.isLogin.value" />
    <login class="net_" v-if="!state.isLogin.value" />
    <lyric class="lyric_" />
    <effect class="effect_" v-if="state.isPanner.value" />
    <comments class="comments_" v-if="state.isComments.value" />

    <span class="setting iconfont icon-shezhi" @mouseenter="()=>isOpenMenu = true"></span>
    <span class="msg">{{msgs[state.msg.value]}}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import three from "@/components/threeD/index.vue";
import dou from "@/components/songList/dou.vue";
import menugq from "@/components/index/menu.vue";
import control from "@/components/index/control.vue";
import netgq from "@/components/songList/net.vue";
import lyric from "@/components/index/lyric.vue";
import login from '@/components/index/login.vue'
import {state} from '@/util/state.js'
import effect from '@/components/index/effect.vue'
import comments from '@/components/index/comments.vue'

const isOpenMenu = ref(false)

const msgs = ['','不要乱点，正在加载中......']

let user = localStorage.getItem('user')
state.isLogin.value = user ? true : false

</script>

<style scoped lang="less">
.index {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  .comments_ {
    position: absolute;
    left: 50px;
    bottom: 200px;
  }
  .effect_ {
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
  .msg {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 0.8rem;
  }
  .setting {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 1.5rem;
  }
  .lyric_ {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
  }
  .dou_ {
    position: absolute;
    right: 50px;
    top: 50px;
  }
  .net_ {
    position: absolute;
    left: 50px;
    top: 50px;
  }
  .menu_ {
    position: absolute;
    z-index: 1;
    transition: transform 300ms linear;
  }
  .control_ {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }
}
</style>