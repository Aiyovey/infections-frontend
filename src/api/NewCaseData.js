import request from "@/utils/request";

export function newCaseData() {
    return request({
        url: '/newCase/list',
        method: 'get',
    })
}