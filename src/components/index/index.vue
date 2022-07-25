<template>
  <div class="index">
    <three class="three_" v-if="show.three" />
    <anchor from="control">
      <control />
    </anchor>
    
    <anchor from="dou">
      <dou />
    </anchor>

    <anchor from="net" v-if="state.isLogin.value">
      <netgq />
    </anchor>
    
    <anchor from="lyric">
      <lyric />
    </anchor>
    
    <anchor from="effect">
      <effect />
    </anchor>

    <anchor from="comments">
      <comments />
    </anchor>

    <anchor from="piano">
      <piano />
    </anchor>


    <login class="login_" v-if="!state.isLogin.value" />

    <menugq class="menu_" @mouseleave="()=>isOpenMenu=false" 
      :style="{transform: isOpenMenu ? 'translate(0px,0)' : 'translate(-200px,0)'}"/>

    <span class="setting iconfont icon-shezhi" @mouseenter="()=>isOpenMenu=true"></span>
    <span class="msg">{{msgs[state.msg.value]}}</span>
    <!-- <fft style="backgroundColor:white;position:absolute" /> -->
    
    <!-- <Axis /> -->
  </div>
</template>

<script setup>
import { ref ,defineAsyncComponent} from "vue";
import {state,position,show} from '@/util/state.js'

import Axis from '@/components/widgets/axis.vue'

// import fft from "./fft.vue"

import menugq from "@/components/index/menu.vue";
import anchor from '@/components/widgets/anchor.vue'
const three = defineAsyncComponent(()=>import('@/components/threeD/index.vue'))
const lyric = defineAsyncComponent(()=>import('@/components/index/lyric.vue'))
const netgq = defineAsyncComponent(()=>import('@/components/songList/net.vue'))
const control = defineAsyncComponent(()=>import('@/components/index/control.vue'))
const dou = defineAsyncComponent(()=>import('@/components/songList/dou.vue'))
const effect = defineAsyncComponent(()=> import('@/components/index/effect.vue'))
const login = defineAsyncComponent(()=> import('@/components/index/login.vue'))
const comments = defineAsyncComponent(()=> import('@/components/index/comments.vue'))
const piano = defineAsyncComponent(()=>import('@/components/piano/index.vue'))



const isOpenMenu = ref(false)

const msgs = ['','拼命加载中...']

let user = localStorage.getItem('user')
state.isLogin.value = user ? true : false

let positionStr = localStorage.getItem('position')
positionStr ? position.value = JSON.parse(positionStr) : null

let show_ = localStorage.getItem('show')
show_ ? show.value = JSON.parse(show_) : null

</script>

<style scoped lang="less">
.index {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  perspective: 900px;
  .anchor_ {
    position: absolute;
    z-index: 1;
  }
  .msg {
    position: absolute;
    z-index: 2;
    left: 60px;
    top: 20px;
    font-size: 0.8rem;
  }
  .setting {
    position: absolute;
    z-index: 2;
    left: 20px;
    top: 20px;
    font-size: 1.5rem;
  }
  .menu_ {
    position: absolute;
    z-index: 3;
    transition: transform 300ms linear;
  }
  .login_ {
    position: absolute;
    left: 100px;
    top: 100px;
  }
}
</style>