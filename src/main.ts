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

zjRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
