import {sum} from './js/main'
const {priceformat} = require('./js/format')
import "./js/element"
if(module.hot){
  module.hot.accept('./js/element',()=>{
    console.log('热更新')
  })
}
import {createApp} from 'vue/dist/vue.esm-bundler'

import app from './vue/app.vue'

console.log(sum(20,30))
console.log(priceformat())

const App = createApp(app)

App.mount('#app')
