const h = (tag, props, children) => {
  return{
    tag,
    props,
    children
  }
}

const mount = (vnode, container) => {
  // vnode -> elemenet
  // 1.创建出真实的原生，并且保存在vnode上
  const el = vnode.el = document.createElement(vnode.tag)
  
  // 2.处理props
  if(vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      
      if(key.startsWith('on')){ // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(),value)
      }else{
        el.setAttribute(key,value)
      }
    }
  }
  
  // 3.处理children
  if(vnode.children){
    if(typeof vnode.children === "string"){
      el.textContent = vnode.children
    }else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }
  
  // 4.将el挂载到container上
  container.appendChild(el)
}

const patch = (n1, n2) => {
  if(n1.tag!==n2.tag){
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el)
    mount(n2, n1ElParent)
  } else {
    const el = n2.el = n1.el
    
    // 2.处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1 获取所有的newProps
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if(oldValue!==newValue){
        if(key.startsWith('on')){ // 对事件监听的判断
          el.addEventListener(key.slice(2).toLowerCase(),newValue)
        }else{
          el.setAttribute(key,newValue)
        }
      }
    }
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if(!(key in newProps)){
        if(key.startsWith('on')){ // 对事件监听的判断
          const value = oldProps[key]
          el.removeEventListener(key.slice(2).toLowerCase(),value)
        }else{
          el.removeAttribute(key)
        }
      }
    }
    
    // 3.处理children
    
  }
}
