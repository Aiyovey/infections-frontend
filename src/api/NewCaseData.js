import request from "@/utils/request";

export function newCaseData() {
    return request({
        url: '/newCase/list',
        method: 'get',
    })
}

// ģ����
export function infectionRes() {
    return request({
      url: '/newCase/infection-res',
      method: 'get',
    })
  }