import {$ajax_post} from '../../http-service'

//加入购物车
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Card/Add',
            data: {
                userId: from.userId,
                goodsIds: from.goodsId,
                number: from.number ? from.number : 1
            }
        }
        console.log(option)
        $ajax_post(option).then(data => {
            if (data) {
                resolve(data)
            } else {
                reject()
            }
        })
    })
}