function getLocalUrl(url){
  return new Promise((resolve,reject)=>{
    fetch(url,{
      responseType:'blob'
    }).then(res=>res.blob()).then(res=>{
      let url_ = URL.createObjectURL(res)
      resolve(url_)
    }).catch(err=>console.log(err))
  })
}

class Player {
  ctx = null
  audio = null
  fft = new Uint8Array(128)
  analyser = null

  isPlay = false //是否播放中

  init(){
    this.audio = new Audio()
    this.ctx = new AudioContext()
    this.analyser = this.ctx.createAnalyser()
    let source = this.ctx.createMediaElementSource(this.audio);
    this.analyser.fftSize = 512
    source.connect(this.analyser).connect(this.ctx.destination)
  }

  async start(url){
    this.ctx || this.init()
    let localUrl = await getLocalUrl(url)
    this.audio.src = localUrl
    this.audio.play()
  }
} 

export const player = new Player()