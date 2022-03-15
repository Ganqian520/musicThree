import { ref } from 'vue'

export const state = {
  isLogin: ref(false),
  msg: ref(0), //提示文字的序号
  isOpenAnchor: ref(false),//定位器
  show: ref({
    effct: true,
    comments: true,
    piano: true,
    dou: true,
    net: true,
    lyric: true,
    control: true,
    three: true,
  }),
}

export const position = ref({
  comments: { x: 546, y: 302 },
  control: { x: 378, y: 571 },
  dou: { x: 1168, y: 20 },
  effect: { x: 59, y: 487 },
  lyric: { x: 591, y: 25 },
  net: { x: 100, y: 20 },
  piano: { x: 789, y: 424 },
})