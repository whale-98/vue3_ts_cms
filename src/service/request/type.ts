import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface ZJRequestInterceptors {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ZJRequestConfig extends AxiosRequestConfig {
  interceptors?: ZJRequestInterceptors
  showLoading?: boolean
}
