import {sum} from './js/main'
const {priceformat} = require('./js/format')
import "./js/element"
import {createApp} from 'vue/dist/vue.esm-bundler'

import app from './vue/app.vue'

console.log(sum(20,30))
console.log(priceformat())

const app = createApp(app)

app.mount('#app')
