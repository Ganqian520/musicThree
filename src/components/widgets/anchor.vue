<template>
  <div
    class="anchor"
    v-if="show[props.from]"
    :style="{
      left: position[props.from].x + 'px',
      top: position[props.from].y + 'px',
    }"
  >
    <slot class="content" />
    <div
      class="mask bg"
      v-if="state.isOpenAnchor.value"
      @touchstart="down"
    ></div>
  </div>
</template>

<script setup>
import { ref, toRaw } from "vue";
import { position, state, show } from "@/util/state.js";
const props = defineProps({
  from: String,
});
let isDown = false;
let oldX, oldY;
function down(e) {
  isDown = true;
  oldX = e.touches[0].clientX;
  oldY = e.touches[0].clientY;
  document.body.ontouchmove = (e) => move(e);
  document.body.ontouchend = up;
}
function move(e) {
  console.log(e);
  position.value[props.from].x += e.touches[0].clientX - oldX;
  position.value[props.from].y += e.touches[0].clientY - oldY;
  oldX = e.touches[0].clientX;
  oldY = e.touches[0].clientY;
}
function up() {
  isDown = false;
  document.body.ontouchmove = null;
  document.body.ontouchend = null;
  localStorage.setItem("position", JSON.stringify(position.value));
}
</script>

<style scoped lang="less">
.anchor {
  position: absolute;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
  z-index: 1;
  .mask {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>