<template>
  <div class='menu'>
    <span class="item">退出网易云账号</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
    cursor: pointer;
    height: 6vh;
    line-height: 6vh;
    padding-left: 10px;
  }
}
</style>