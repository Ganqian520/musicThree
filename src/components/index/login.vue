<template>
  <div class="login">
    <span class="item">网易云</span>
    <input class="phone" type="text" placeholder="手机号：" v-model="phone" />
    <div class="ver">
      <input class="input_ver" type="text" v-model="captcha" placeholder="验证码：" />
      <span class="send" v-if="isCanSend" @click="send_">发送验证码</span>
      <span class="send" v-if="!isCanSend">{{count}}</span>
    </div>
    <div class="start item" v-if="isCanLogin" @click="login_">登录</div>
    <div class="start item" v-if="!isCanLogin">登录中。。。</div>
  </div>
</template>

<script setup>
import { ref,onUnmounted } from "vue";
import { send, login } from "@/api/request.js";
import {state} from '@/util/state.js'

const phone = ref("");
const captcha = ref("");
const isCanSend = ref(true)
const isCanLogin = ref(true)
const count = ref(60)

let interval  //倒数定时器

onUnmounted(()=>{
  clearInterval(interval)
})

async function send_() {
  isCanSend.value = false
  interval = setInterval(() => {
    count.value--
    if(count.value==-1){
      count.value = 60
      isCanSend.value = true
      clearInterval(interval)
    }
  }, 1000);
  send({ phone: phone.value });
}
function login_() {
  isCanLogin.value = false
  login({ phone: phone.value, captcha: captcha.value }).catch(err=>{
    isCanLogin = true
  })
}
</script>

<style scoped lang="less">
input {
  outline-style: none;
  border: 0px;
  border-bottom: 1px solid cyan;
  background-color: transparent;
  vertical-align: bottom;
  height: 30px;
  line-height: 30px;
  padding: 0px;
}
input::-webkit-input-placeholder{
  color: rgba(0,255,255,0.7);
}
.login {
  width: 200px;
  display: flex;
  flex-direction: column;
  .item {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
  .phone {
    width: 100%;
  }
  .ver {
    display: flex;
    height: 50px;
    align-items: center;
    .input_ver {
      width: 120px;
    }
    .send {
      flex: 1;
      text-align: right;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>