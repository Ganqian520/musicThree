<template>
  <div class="anchor bg" v-if="state.isOpenAnchor.value">
    <span class="icon iconfont icon-si-glyph-anchor" @mousedown="down"></span>
  </div>
</template>

<script setup>
import { ref, defineProps, toRaw } from "vue";
import { position ,state} from "@/util/state.js";
const props = defineProps({
  from: String,
});
let isDown = false;
function down() {
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
  localStorage.setItem("position", JSON.stringify(toRaw(position.value)));
}
</script>

<style scoped lang="less">
.anchor {
  position: absolute;
  left: 0px;
  top: -30px;
  width: 30px;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  .icon {
    margin: auto;
  }
}
</style>