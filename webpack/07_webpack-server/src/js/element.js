import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import nhltImage from '../img/nhlt.jpg'

const element = document.createElement('div')
element.innerHTML = ["hello","webpack"].join(" ")
element.className = "content"

// 设置背景图片
const bgDivEl = document.createElement('div')
bgDivEl.className = "image-bg"

console.log('ccccc')
// const imgEl = document.createElement('img')
// imgEl.src = nhltImage;

document.body.appendChild(element)
document.body.appendChild(bgDivEl)
// document.body.appendChild(imgEl)
// console.log(content.red)
