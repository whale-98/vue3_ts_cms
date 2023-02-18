import zjRequest from '@/service'
import { IDataType } from '../../request/types'

export function getPageListData(url: string, queryInfo: any) {
  console.log(url, queryInfo, '???')
  return zjRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
