import request from '@/utils/request'

// 查询参数列表
export function listAgents() {
  return request({
    url: '/agentsDynamic/list',
    method: 'post',
  })
}
