import {$ajax_post} from '../../http-service'

//
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/AfterSale/Add',
            data: {
                userId: from.userId,
                orderId: from.orderId,
                afterSaleMode: from.afterSaleMode,
            }
        }
        $ajax_post(option).then(data => {
            if (data.data.Result) {
                resolve(data.data)
            } else {
                reject()
            }
        })
    })
}