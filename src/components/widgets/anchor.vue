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
    <Axis />
    <div
      class="mask"
      v-if="state.isOpenAnchor.value"
      @mousedown="down"
    ></div>
  </div>
</template>

<script setup>
import Axis from '@/components/widgets/axis.vue'
import { position, state, show } from "@/util/state.js";
const props = defineProps({
  from: String,
});
let isDown = false;
function down(e) {
  isDown = true;
  document.body.onmousemove = (e) => move(e);
  document.body.onmouseup = up;
}
function move(e) {
  position.value[props.from].x += e.movementX;
  position.value[props.from].y += e.movementY;
}
function up() {
  isDown = false;
  document.body.onmousemove = null;
  document.body.onmouseup = null;
  localStorage.setItem("position", JSON.stringify(position.value));
}
</script>

<style scoped lang="less">
.anchor {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  transform-style: preserve-3d;
  transform: rotateY(45deg);
  border: 1px cyan solid;
  .mask {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    border: 1px cyan solid;
  }
}
</style>