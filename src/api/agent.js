import request from '@/utils/request'

// 查询列表
export function listAgents(data) {
  return request({
    url: '/agentsDynamic/list',
    method: 'post',
    data: JSON.stringify(data)
  })
}

// 查询最大步数
export function getMaxStep() {
  return request({
    url: '/agentsDynamic/maxstep',
    method: 'get',
  })
}
