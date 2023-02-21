import { createStore, Store, useStore as userVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'

import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 23,
      height: '123'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export async function setupStore() {
  await store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return userVuexStore()
}

export default store
