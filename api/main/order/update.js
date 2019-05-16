import {$ajax_post} from '../../http-service'

//加入订单
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Order/Update',
            data: {
                Id: from.Id,
                // userId: from.userId,
                // orderGoodsId: from.goodsId, //商品id*数量 拼接  数组
                address: from.address,
                contactNumber: from.contactNumber,
                // total: from.total
            }
        }
        $ajax_post(option).then(data => {
            if (data.data.Result) {
                resolve(data.data.data)
            } else {
                reject()
            }
        })
    })
}