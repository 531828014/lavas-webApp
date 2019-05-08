import {$ajax_fetch} from '../../http-service'
import {createOrder} from '../../model/order'
import {createGoods} from '../../model/goods'
//
export default function(from) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Order/Detial',
            data: {
                Id: from.id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data.data.Result) {
                let ret = {}
                ret.orderDate = data.data.orderData ? data.data.orderData.map(item => createOrder ({
                    id: item.Id,
                    userId: item.userId,
                    address: item.address,
                    contactNumber: item.contactNumber,
                    remark: item.remark,
                    total: item.total
                })) : []
                ret.goods = data.data.goods ? data.data.goods.map(item => createGoods ({
                    id: item.Id,
                    title: item.title, 
                    briefIntroduction: item.briefIntroduction, 
                    purchasePrice: item.purchasePrice,
                    sellingPrice: item.sellingPrice,
                    category: item.category,
                    designer: item.designer,
                    number: item.number,
                    imgUrl: item.imgList ? 'http://localhost:5699/' + item.imgList[0] : ''
                    // imgUrl: item.imgList ? item.imgList.map(url => {
                    //     return{
                    //         url: 'http://localhost:5699/' + url
                    //     }
                    // }) : []
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

