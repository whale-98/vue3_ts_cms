import ZJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const zjRequest = new ZJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default zjRequest
