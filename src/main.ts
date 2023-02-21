import { createApp } from 'vue'

import { globalRegister } from './global'
import { setupStore } from './store/index'

import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons-vue' // 引入所有图标，并命名为 Icons

const app = createApp(App)

// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
for (const i in Icons) {
  app.component(i, Icons[i as keyof typeof Icons])
}

// globalRegister(app)
await setupStore()
app.use(globalRegister) // 组件注册
app.use(router)
app.use(store)

app.mount('#app')
