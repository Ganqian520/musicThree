<script setup>
  import index from './components/index/index.vue'
</script>

<template>
  <index class="index" />
</template>

<style>
*{
  color: cyan;
  text-shadow:  0 0 10px cyan,0 0 30px cyan,0 0 50px cyan;;
  user-select: none;
}
.scroll::-webkit-scrollbar {
  width: 10px;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
.hover:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.bg {
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  border: rgba(0, 255, 255, 1) solid 1px;
  box-shadow: 0 0 5px 0 rgba(0, 255, 255, 1) inset;
}

</style>
