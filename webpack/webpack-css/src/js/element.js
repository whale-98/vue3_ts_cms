import '../css/style.css'
import '../css/title.less'
 
const element = document.createElement('div')
element.innerHTML = ["hello","webpack"].join(" ")
element.className = "content"

document.body.appendChild(element)
