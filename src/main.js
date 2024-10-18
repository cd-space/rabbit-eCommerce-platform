//引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
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
    

//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        //el：指令绑定的那个元素 img
        //binding：binding.value  指令等于号后面绑定的表达式的值 图片url
        // console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
            //   console.log(isIntersecting)
              if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
                stop()
              }
            },
          )
    }
    
})