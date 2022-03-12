<template>
  <index />
</template>

<script setup>
  import index from './components/index/index.vue'
  document.body.addEventListener('click',()=>{
    try {
      document.body.requestFullscreen()
    }catch(err){

    }
  })
</script>
