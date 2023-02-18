import zjRequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '../request/types'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return zjRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return zjRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zjRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
