import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { ZJRequestConfig, ZJRequestInterceptors } from './type'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = false

class ZJRequest {
  instance: AxiosInstance
  interceptors?: ZJRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: ZJRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对于的实例的拦截器
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
        if (this.showLoading) {
          console.log(1)
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        return res.data
      },
      (error) => {
        this.loading?.close()
        return error
      }
    )
  }

  request<T>(config: ZJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(<InternalAxiosRequestConfig>config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          return err
        })
    })
  }

  get<T>(config: ZJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default ZJRequest
