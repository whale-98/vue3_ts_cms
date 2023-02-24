import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
import localCache from '@/utils/cache'
import router from '@/router'
import { RouteRecordRaw } from 'vue-router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: '',
      permission: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenusInfo: any) {
      state.userMenus = userMenusInfo.userMenus
      // const routes = mapMenusToRoutes(userMenus)
      userMenusInfo.routes.forEach((route: RouteRecordRaw) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
      const permission = mapMenusToPermissions(userMenusInfo.userMenus)
      state.permission = permission
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.登录获取token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息数据
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.获取菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      const routes = await mapMenusToRoutes(userMenus)
      commit('changeUserMenus', { userMenus, routes })
      localCache.setCache('userMenus', userMenus)

      // 4.跳转首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('phoneLoginAction')
    },
    async loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        const routes = await mapMenusToRoutes(userMenus)
        commit('changeUserMenus', { userMenus, routes })
      }
    }
  }
}

export default loginModule
