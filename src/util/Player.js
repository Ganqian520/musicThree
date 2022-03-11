import { getRealUrl, getLocalUrl } from '@/api/request.js'
import { ref } from 'vue'

class Player {
  ctx = null
  audio = document.createElement('audio')
  fft = new Uint8Array(128)
  analyser = null
  isPlay = ref(false) //是否播放中
  music = ref({}) //当前音乐，id,name等
  index = 0 //当前播放序号
  listDou = ref([])  //播放队列
  listNet = ref([])
  listWant = [] //插队播放
  indexNet = ref(0) //方便列表的定位
  indexDou = ref(0)
  updateNetCb = null //网易云歌词进度回调
  updateProgressCb = null //进度条回调
  isUserSlide = false //用户是否在滑动进度条
  order = 0  //{ sequential: 0, random: 1, single: 2 } //播放顺序
  // isWait = ref(true) //鼠标等待

  init() {
    this.ctx = new AudioContext()
    this.analyser = this.ctx.createAnalyser()
    let source = this.ctx.createMediaElementSource(this.audio);
    this.analyser.fftSize = 512
    source.connect(this.analyser).connect(this.ctx.destination)

    this.audio.ontimeupdate = () => {
      this.updateNetCb && this.music.value.platform == 'net' && this.updateNetCb()
      this.updateProgressCb && !this.isUserSlide && this.updateProgressCb()
    }
    let this_ = this
    this.audio.addEventListener('ended', this.next.bind(this_))
  }

  async start(music, index) {
    this.isPlay.value = true
    if (music.name == this.music.value.name) {
      this.audio.play()
      return
    }
    this.ctx || this.init()
    this.audio.pause()
    this.music.value = music
    this.index = index
    let url
    if (music.platform == 'net') {
      url = await getRealUrl(music.id)
      this.indexNet.value = index
    } else if (music.platform == 'dou') {
      url = music.url
      this.indexDou.value = index
    }
    let localUrl = await getLocalUrl(url)
    this.audio.src = localUrl
    this.audio.play()
  }

  next() {
    if (this.listWant.length == 0) {
      let list = this.music.value.platform == 'net' ? this.listNet.value : this.listDou.value
      if (this.order == 0) {
        this.index = this.index < list.length - 1 ? this.index + 1 : 0
        this.start(list[this.index], this.index)
      } else if (this.order == 1) {
        this.index = Math.floor(Math.random() * list.length - 1)
        this.start(list[this.index], this.index)
      } else if (this.order == 2) {
        this.audio.play()
      }
    } else {
      this.start(this.listWant[0])
      this.listWant.shift()
    }
  }

  last() {
    let list = this.music.value.platform == 'net' ? this.listNet.value : this.listDou.value
    this.index = this.index - 1 < 0 ? 0 : this.index-1
    this.start(list[this.index], this.index)
  }

  pause() {
    this.audio.pause()
    this.isPlay.value = false
  }

  resume() {
    console.log('resume')
    this.audio.play()
    this.isPlay.value = true
  }
}

export const player = new Player()