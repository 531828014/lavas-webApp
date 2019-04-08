import {post, fetch} from '../http-service'

export function postIndex(data) {
    return new Promise((resolve, reject) => {
        let url = '/index/carousel/list?qq=3532363327'
        post(url, data).then(data => {
            console.log(data)
            resolve(data)
        }).catch(() => {
            reject()
        })
    })
}