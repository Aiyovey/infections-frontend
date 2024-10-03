import request from "@/utils/request";

export function newCaseData() {
    return request({
        url: '/newCase/list',
        method: 'get',
    })
}

// Ä£Äâ½á¹û
export function infectionRes() {
    return request({
      url: '/newCase/infection-res',
      method: 'get',
    })
  }