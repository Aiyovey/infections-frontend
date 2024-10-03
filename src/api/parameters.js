import request from '@/utils/request'

// 查询参数列表
export function listParameters() {
  return request({
    url: '/parameters/list',
    method: 'get',
  })
}
