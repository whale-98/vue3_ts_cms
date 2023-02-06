class Dep {
    constructor() {
        this.subscribers = new Set()
    }

    addEffect(effect) {
        this.subscribers.add(effect)
    }

    depend() {
        if(activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }

    notify(){
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}

let activeEffect = null
function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}


// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象，弱引用

const targetMap = new WeakMap()
function getDep(target, key) {
    // 1.根据对象（target）去除对应的Map对象
    let depMap = targetMap.get(target)
    if(!depMap) {
        depMap = new Map()
        targetMap.set(target,depMap)
    }

    // 2.取出具体的dep对象
    let dep = depMap.get(key)
    if(!dep) {
        dep = new Dep()
        depMap.set(key, dep)
    }
    return dep
}

// vue2对raw进行数据劫持
// function reactive(raw){
//     Object.keys(raw).forEach(key => {
//         const dep = getDep(raw,key)
//         let value = raw[key]
//
//         Object.defineProperty(raw, key, {
//             get(){
//                 dep.depend()
//                 return value
//             },
//             set(newValue){
//                 if(value !== newValue){
//                     value = newValue
//                     dep.notify()
//                 }
//             }
//         })
//     })
//     return raw
// }


// vue3对raw进行数据劫持
function reactive(raw){
    return new Proxy(raw,{
        get(target, key){
            const dep = getDep(target, key)
            dep.depend()
            return target[key]
        },
        set(target, key, newValue){
            if(target[key] !== newValue){
                const dep = getDep(target, key)
                target[key] = newValue
                dep.notify()
            }
        }
    })
}
