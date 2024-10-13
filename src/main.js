//引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// //测试接口函数
// import {getCategory} from '@/apis/testAPI'
// import { colProps } from 'element-plus'
// getCategory().then(res=>{
//     console.log('res', res)
// })
    
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
    