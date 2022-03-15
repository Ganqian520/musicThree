<template>
  <index />
</template>

<script setup>
  import {toRaw} from 'vue'
  import index from './components/index/index.vue'
  import {state} from '@/util/state.js'
  let show = localStorage.getItem('show')
  if(show){
    state.show.value = JSON.parse(show)
  }else {
    localStorage.setItem('show',JSON.stringify(toRaw(state.show.value)))
  }
  // document.body.addEventListener('click',()=>{
  //   try {
  //     document.body.requestFullscreen()
  //   }catch(err){

  //   }
  // })
</script>
