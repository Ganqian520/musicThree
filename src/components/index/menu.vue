<template>
  <div class='menu'>
    <div class="item">
      <span class="tip">环绕音效</span>
      <div class="right">
        <mswitch class="switch_" :flag="false" @change="handlePanner"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import mswitch from '@/components/widgets/switch.vue'
import {state} from '@/util/state.js'

function handlePanner(e){
  state.isPanner.value = e
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