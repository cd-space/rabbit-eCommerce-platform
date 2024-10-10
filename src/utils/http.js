//axios基础的封装
import axios from "axios";

const  htttpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

// axios请求拦截器
htttpInstance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  htttpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })


export default htttpInstance