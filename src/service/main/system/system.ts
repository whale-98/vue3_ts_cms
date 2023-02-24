import zjRequest from '@/service'
import { IDataType } from '../../request/types'

export function getPageListData(url: string, queryInfo: any) {
  return zjRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
