import { httpNet } from "./index.js";

//网易云
/*
export function ({}){
  return httpNet('',{})
}
*/

//登录
export function login({ phone, password }) {
  return httpNet('/login/cellphone', { phone, password })
}
//获取歌曲列表
export function getSongList({ id }) {
  return httpNet('/playlist/detail', { id })
}
//获取歌单列表
export function getSongsList({ uid }) {
  return httpNet('/user/playlist', { uid })
}
//获取歌词
export function getLyric({ id }) {
  return httpNet('/lyric', { id })
}