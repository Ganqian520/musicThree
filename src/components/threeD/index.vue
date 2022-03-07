<template>
  <canvas class="canvas" ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import {player} from '../../util/index.js'

const canvas = ref(null);
let renderer, scene, camera, controls, composer;

let barGroup; // 柱子
let N = 128; //柱子数
let A = 0.5; //柱子边长
let R = 40; //柱子围成圆圈的边长
let AXES = 100; //坐标线长度
let FFT = 20; //柱子最大变化值
let FFT_ = 10; //线的最大变化值
let COLOR = 0x00ffff; //主颜色
let H = 10; //柱子的初始高度
let outLine; //外线模型
let inLine;
let midLines = []; //中间线模型集合
let points = []; //线需要的点集

onMounted(() => {
  init();
  animate();
});

//初始化
function init() {
  initThree();
  initControl();
  initAudioBars();
  initBloomPass();
  initLight();
  initLines();
  addWindowListener()
}
//启动
function animate() {
  requestAnimationFrame(animate);
  update();
  composer.render();
}
//更新数据
function update() {
  player.analyser?.getByteFrequencyData(player.fft);
  // console.log(player.analyser)
  //柱子
  barGroup.children.forEach((v, i) => {
    v.position.y = H + player.fft[i] * (FFT / 256);
  });
  //线
  let arrOut = [];
  let arrIn = [];
  for (let i = 0; i < player.fft.length; i++) {
    let angle = ((Math.PI * 2) / player.fft.length) * i;
    let x_ = Math.cos(angle) * player.fft[i] * (FFT_ / 256);
    let z_ = Math.sin(angle) * player.fft[i] * (FFT_ / 256);
    let arr_mid = [
      points[i * 3] - x_,
      0,
      points[i * 3 + 2] - z_,
      points[i * 3] + x_,
      0,
      points[i * 3 + 2] + z_,
    ];
    midLines[i].geometry.getAttribute("position").set(arr_mid, 0);
    midLines[i].geometry.getAttribute("position").needsUpdate = true;
    arrOut.push(points[i * 3] + x_);
    arrOut.push(0);
    arrOut.push(points[i * 3 + 2] + z_);
    arrIn.push(points[i * 3] - x_);
    arrIn.push(0);
    arrIn.push(points[i * 3 + 2] - z_);
  }
  outLine.geometry.getAttribute("position").set(arrOut, 0);
  inLine.geometry.getAttribute("position").set(arrIn, 0);
  outLine.geometry.getAttribute("position").needsUpdate = true;
  inLine.geometry.getAttribute("position").needsUpdate = true;
}

//窗口重置
function addWindowListener() {
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  });
}

// 音频线
function initLines(radius, countData) {
  let material = new THREE.LineBasicMaterial({
    color: COLOR,
  });
  player.fft.forEach((v, i) => {
    let angle = ((Math.PI * 2) / player.fft.length) * i;
    let x = Math.cos(angle) * R;
    let y = 0;
    let z = Math.sin(angle) * R;
    points.push(x, y, z);
    let geometry = new THREE.BufferGeometry();
    geometry.attributes.position = new THREE.BufferAttribute(
      new Float32Array([x, y, z, x, y, z]),
      3
    );
    let line = new THREE.Line(geometry, material);
    midLines.push(line);
    scene.add(line);
  });
  let geometryOut = new THREE.BufferGeometry();
  let geometryIn = new THREE.BufferGeometry();
  geometryOut.attributes.position = new THREE.BufferAttribute(
    new Float32Array(points),
    3
  );
  geometryIn.attributes.position = new THREE.BufferAttribute(
    new Float32Array(points),
    3
  );
  outLine = new THREE.LineLoop(geometryOut, material);
  inLine = new THREE.LineLoop(geometryIn, material);
  scene.add(outLine, inLine);
}

// 环境光和平行光
function initLight() {
  scene.add(new THREE.AmbientLight(0x444444));
  let light = new THREE.PointLight(0xffffff);
  light.position.set(80, 100, 50);
  //告诉平行光需要开启阴影投射
  light.castShadow = true;
  scene.add(light);
}
//光辉
function initBloomPass() {
  let renderScene = new RenderPass(scene, camera);
  let bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.2,
    0
  );
  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
}
//音频柱子
function initAudioBars() {
  barGroup = new THREE.Group();
  for (let i = 0; i < N; i++) {
    let minGroup = new THREE.Group();
    let box = new THREE.SphereGeometry(A);
    let material = new THREE.MeshPhongMaterial({
      color: COLOR,
    }); // 材质对象
    let mesh = new THREE.Mesh(box, material);

    mesh.position.y = 0.5;
    minGroup.add(mesh);
    let angle = ((Math.PI * 2) / N) * i + Math.PI / 2;
    let x = Math.sin(angle) * R;
    let z = Math.cos(angle) * R;
    minGroup.position.set(x, H, z);
    barGroup.add(minGroup);
  }
  scene.add(barGroup);
}
//初始化场景，相机等
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvas.value,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  scene.background = new THREE.CubeTextureLoader().load(getImg());
  camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 10000);
  camera.position.set(0, 40, 80);
  camera.lookAt(0, 0, 0);
  let axesHelper = new THREE.AxesHelper(AXES);
  // scene.add(axesHelper);
}
//获取天空盒
function getImg() {
  let arr = [
    "right.jpg",
    "left.jpg",
    "top.jpg",
    "bottom.jpg",
    "front.jpg",
    "back.jpg",
  ];
  return arr.map((v) => {
    return new URL(`../../assets/skybox/${v}`, import.meta.url).href;
  });
}
//鼠标控制
function initControl() {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true; //惯性
  controls.enableZoom = true; //缩放

  controls.autoRotate = true; //自动旋转
  controls.minDistance = 1; //相机到原点最近距离
  controls.maxDistance = 200; //最远距离
}
</script>

<style scoped >
.canvas {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>