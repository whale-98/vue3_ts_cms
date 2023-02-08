import ZJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const zjRequest = new ZJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = '123'
      if (token) {
        config.headers.Authorization = 'Bearer' + token
      }
      console.log(config, '请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      console.log('响应成功拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default zjRequest
