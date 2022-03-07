import axios from 'axios'

const netEaseCloud = axios.create({
  baseURL:'https://ganqian1.vercel.app/',
  timeout:8000,
})

const uniCloud = axios.create({
  baseURL: 'https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index',
  timeout:8000,
})

export function httpNet(path,params){
  let token = localStorage.getItem('token')
  return new Promise((resolve,reject)=>{
    netEaseCloud.get(path,{
      params,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(res=>{
      if(res.status==200 && res.data.code==200){
        resolve(res.data)
      }else{
        
      }
    })
  })
}

export function getDou(){
  return new Promise((resolve,reject)=>{
    let url = 'https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index'
    axios({
      method:'POST',
      url,
      data:JSON.stringify({action:'getDouYin'})
    }).then(res=>{
      resolve(res)
    })
  })
}
