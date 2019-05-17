import {$ajax_fetch} from '../../http-service'
import {createOrder} from '../../model/order'

//
export default function(from) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/AfterSale/AferList',
            data: {
                Id: from.id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                
                let ret = data.data.data ? data.data.data.map(item => createOrder ({
                    id: item.Id,
                    userId: item.userId,
                    orderGoodsId: item.orderGoodsId,
                    address: item.address,
                    contactNumber: item.contactNumber,
                    remark: item.remark,
                    total: item.total,
                    status: item.status
                })) : []
                resolve(ret)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

