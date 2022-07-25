<template>
    <div class="x"></div>
    <div class="y"></div>
    <div class="z"></div>
</template>
<script setup>

</script>
<style>
    .x{
      width: 100px;
      height: 2px;
      background-color: red;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 5px;
      z-index: 999;
    }
    .y{
      width: 2px;
      height: 100px;
      background-color: green;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 5px;
      z-index: 999;
    }
    .z{
      width: 100px;
      height: 2px;
      background-color: blue;
      position: absolute;
      left: calc(50% - 50px);
      top: 50%;
      transform: rotateY(90deg) translateX(-50px);
      margin: 5px;
      z-index: 999;
    }
</style>