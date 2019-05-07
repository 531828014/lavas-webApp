import {$ajax_post} from '../../http-service'

//发货
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Order/ReceiveGoods',
            data: {
                Id: from.id, //订单id
            }
        }
        $ajax_post(option).then(data => {
            if (data) {
                resolve(data)
            } else {
                reject()
            }
        })
    })
}

