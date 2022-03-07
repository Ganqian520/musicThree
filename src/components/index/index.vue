<template>
  <div class="index">
    <dou class="dou" />
    <three />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import three from "../threeD/index.vue";
import dou from "../songsList/dou.vue";

onMounted(() => {});
</script>

<style scoped lang="less">
.index {
  width: 100vw;
  height: 100vh;
  position: relative;
  .dou {
    position: absolute;
    left: 100px;
    top: 100px;
  }
}
</style>