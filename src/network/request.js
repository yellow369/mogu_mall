import axios from 'axios'



export function request(config) {

  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 2000
  })


  // axios拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
//响应
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
  })

  //本身就是一个promise
  return instance(config)

}


