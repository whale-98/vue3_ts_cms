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
    // 2.1 获取所有的newProps添加到el
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
      if(key.startsWith('on')){ // 对事件监听的判断
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(),value)
      }
      if(!(key in newProps)){
        el.removeAttribute(key)
      }
    }
    
    // 3.处理children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []

    if(typeof newChildren === "string"){ // 情况一：newChildren
      if(typeof oldChildren === "string"){
        if(newChildren !== oldChildren){
          console.log(newChildren)
          console.log(el)
          el.textContent = newChildren
        }
      }else {
        el.innerHTML = newChildren
      }
    }else { // 情况二：
       if(typeof oldChildren === "string") {
         el.innerHTML = ""
         newChildren.forEach(item=>{
           mount(item, el)
         })
       } else {
         // 1.前面有相同节点的原生进行patch操作
         const commonLength = Math.min(oldChildren.length, newChildren.length)
         for (let i = 0; i < commonLength; i++) {
           patch(oldChildren[i], newChildren[i])
         }

         // 2.newChildren > oldChildren
         if(newChildren.length > oldChildren.length){
            newChildren.slice(oldChildren.length).forEach(item=>{
              mount(item,el)
            })
         }

         // 3.newChildren < oldChildren
         if(newChildren.length < oldChildren.length){
           oldChildren.slice(newChildren.length).forEach(item=>{
             el.removeChild(item.el)
           })
         }
       }
    }
  }
}
