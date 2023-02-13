import { createApp } from 'vue'

import { globalRegister } from './global'
import zjRequest from './service/index'

import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons

const app = createApp(App)

// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (const i in Icons) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.component(i, Icons[i])
}

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
  }
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
