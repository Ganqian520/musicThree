<template>
  <index />
</template>

<script setup>
  import {toRaw} from 'vue'
  import index from './components/index/index.vue'
  import {state,show} from '@/util/state.js'
  let show_ = localStorage.getItem('show')
  if(show){
    show.value = JSON.parse(show_)
  }else {
    localStorage.setItem('show',JSON.stringify(toRaw(show.value)))
  }
  // document.body.addEventListener('click',()=>{
  //   try {
  //     document.body.requestFullscreen()
  //   }catch(err){

  //   }
  // })
</script>
