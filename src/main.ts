import { createApp } from 'vue'

import { globalRegister } from './global'
import zjRequest from './service/index'

import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

// globalRegister(app)
app.use(globalRegister) // 组件注册
app.use(router)
app.use(store)
app.mount('#app')

// interface DataType {
//   data: any
// }

zjRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (config) => {
      console.log('单独响应的config')
      return config
    }
  },
  showLoading: true
})

zjRequest
  .request({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res)
  })
