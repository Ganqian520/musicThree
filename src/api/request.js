import { instance } from "./index.js";
import { timeTo } from '@/util/index.js'
import { state } from '@/util/state.js'
import axios from 'axios'

//处理歌单
function handleNetSongs(arr){
  return arr.map(v => {
    return {
      name: v.name,
      id: v.id,
      author: v.ar.map(v => v.name).join('/'),
      time: Math.floor(v.dt / 1000),
      platform: 'net',
    }
  })
}

//私人fm
export function getFM() {
  return new Promise((resolve, reject) => {
    instance.get('/personal_fm').then(res => {
      if (res.data?.data) {
        let list = res.data.data.map(v => {
          return {
            name: v.name,
            id: v.id,
            author: v.artists.map(v => v.name).join('/'), //v.ar
            time: Math.floor(v.duration / 1000),  //v.dt
            platform: 'net',
          }
        })
        resolve(list)
      }
    })
  })
}

//添加喜欢
export function addNetLike(id) {
  return new Promise((resolve, reject) => {
    instance.get('/like', {
      params: { id }
    })
  })
}

//请求音乐blob
export function getLocalUrl(url) {
  state.msg.value = 1
  return new Promise((resolve, reject) => {
    fetch(url, {
      responseType: 'blob'
    }).then(res => res.blob()).then(res => {
      state.msg.value = 0
      let url_ = URL.createObjectURL(res)
      resolve(url_)
    }).catch(err => state.msg.value = 0)
  })
}

//搜索网易歌曲
export function searchNet(keywords) {
  return new Promise((resolve, reject) => {
    instance.get('/cloudsearch', {
      params: { keywords }
    }).then(res => {
      if (res.data?.result?.songs) {
        resolve(handleNetSongs(res.data.result.songs))
      }
    })
  })
}
//网易日推
export function getNetDay() {
  return new Promise((resolve, reject) => {
    let uid = JSON.parse(localStorage.getItem('user')).uid
    instance.get('/recommend/songs', {
      params: { uid }
    }).then(res => {
      if (res.data?.data?.dailySongs) {
        resolve(handleNetSongs(res.data.data.dailySongs))
      }
    })
  })
}

//获取歌词
export function getLyric(id) {
  return new Promise((resolve, reject) => {
    instance.get('/lyric', {
      params: { id }
    }).then(res => {
      res = res.data
      if (!res.nolyric) {
        let arr = res.lrc.lyric.split('\n');  //分割成数组
        let arr_ = [];
        for (let v of arr) {
          if (v == '') continue
          let obj = {}
          obj.content = v.match(/](.*)/)[1]
          if (obj.content == '') continue
          obj.time = v.slice(1, 6) //'00:45'        
          obj.second = timeTo(obj.time) //45
          arr_.push(obj)
        }
        resolve(arr_)
      } else {
        resolve([])
      }
    })
  })
}

//获取网易云音乐真实地址
export function getRealUrl(id) {
  return new Promise((resolve, reject) => {
    let url = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    let url_ = 'https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index'
    axios({
      method: 'POST',
      url: url_,
      data: JSON.stringify({ action: 'getNetEaseMusicUrl', url, })
    }).then(res => {
      if (res.data?.url) {
        if(res.data.url!='https://music.163.com/404'){
          resolve(res.data.url)
        }else{
          instance.get(`/song/url?id=${id}`).then(res=>{
            resolve(res.data.data[0].url)
          })
        }       
      }
    }).catch(err => console.log(err))
  })
}

//获取抖音列表
export function getDou() {
  return new Promise((resolve, reject) => {
    let str = localStorage.getItem('douList')
    if (str) {
      resolve(JSON.parse(str))
    } else {
      state.msg.value = 1
      let url = 'https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index'
      axios({
        method: 'POST',
        url,
        data: JSON.stringify({ action: 'getDouYin' })
      }).then(res => {
        state.msg.value = 0
        if (res.data?.data) {
          let list = res.data.data.map(v => {
            return {
              name: v.name,
              tag: v.tag,
              author: v.res.musicAuthor,
              time: v.res.musicDuration,
              // img: v.res.coverUrl,
              url: v.res.musicUrl,
              platform: 'dou'
            }
          })
          localStorage.setItem('douList', JSON.stringify(list))
          resolve(list)
        }
      }).catch(err => state.msg.value = 0)
    }
  })
}

//发送验证码
export async function send({ phone }) {
  return new Promise((resolve, reject) => {
    instance.get('/captcha/sent', {
      params: { phone }
    }).then(res => {
      if (res.status == 200 && res.data.code == 200) {
        resolve(true)
      }
    })
  })
}
//登录
export async function login({ phone, captcha }) {
  return new Promise((resolve, reject) => {
    instance.get('/login/cellphone', {
      params: { phone, captcha }
    }).then(res => {
      if (res.status == 200 && res.data.code == 200) {
        res = res.data
        let userNet = {
          uid: res.account.id,
          avatarUrl: res.profile.avatarUrl,
          nickName: res.profile.nickname,
        };
        localStorage.setItem("user", JSON.stringify(userNet));
        state.isLogin.value = true
        resolve()
      }
    })
  })
}
//获取歌曲列表
export function getSongList({ id }) {
  return new Promise((resolve, reject) => {
    let uid = JSON.parse(localStorage.getItem('user')).uid
    let songsList = localStorage.getItem(`songsListNet${uid}`)
    let songList = localStorage.getItem(`songListNet${id}`)
    if (songList) {
      resolve(JSON.parse(songList))
    } else {
      instance.get('/playlist/detail', {
        params: { id }
      }).then(res => {
        if (res.status == 200 && res.data.code == 200) {
          let list = handleNetSongs(res.data.playlist.tracks)
          //我喜欢列表才缓存
          id == JSON.parse(songsList)[0].id && localStorage.setItem(`songListNet${id}`, JSON.stringify(list))
          resolve(list)
        }
      })
    }
  })
}
//获取歌单列表
export function getSongsList() {
  return new Promise((resolve, reject) => {
    let uid = JSON.parse(localStorage.getItem('user')).uid
    let str = localStorage.getItem(`songsListNet${uid}`)
    if (str) {
      resolve(JSON.parse(str))
    } else {
      instance.get('/user/playlist', {
        params: { uid }
      }).then(res => {
        if (res.status == 200 && res.data.code == 200) {
          res = res.data
          let list = [{ id: res.playlist[0].id, name: '我喜欢' }]
          for (let i = 1; i < res.playlist.length; i++) {
            if (!res.playlist[i].subscribed) {
              list.push({
                id: res.playlist[i].id,
                name: res.playlist[i].name
              })
            }
          }
          localStorage.setItem(`songsListNet${uid}`, JSON.stringify(list))
          resolve(list)
        }
      })
    }
  })
}