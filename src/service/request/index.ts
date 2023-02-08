import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { ZJRequestConfig, ZJRequestInterceptors } from './type'

class ZJRequest {
  instance: AxiosInstance
  interceptors?: ZJRequestInterceptors

  constructor(config: ZJRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 通用拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )
  }

  request(config: ZJRequestConfig): void {
    // 请求级拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(<InternalAxiosRequestConfig>config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res, 123)
    })
  }
}

export default ZJRequest
