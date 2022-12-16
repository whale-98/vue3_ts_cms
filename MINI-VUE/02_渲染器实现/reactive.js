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
    dep.depend()
    effect()
    activeEffect = null
}

const info = {counter: 100}

const dep = new Dep()

watchEffect(function doubleCounter(){
    console.log(info.counter * 2)
})

watchEffect(function powerCounter(){
    console.log(info.counter * info.counter)
})

dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

info.counter++
dep.notify()