import {$ajax_fetch} from '../../http-service'
import {createGoods} from '../../model/goods'
//
export default function() {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Commodity/List',
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data.data ? data.data.data.map(item => createGoods ({
                    id: item.Id,
                    title: item.title, 
                    briefIntroduction: item.briefIntroduction, 
                    purchasePrice: item.purchasePrice,
                    sellingPrice: item.sellingPrice,
                    category: item.category,
                    designer: item.designer,
                    number: item.number,
                    typeId: item.typeId,
                    imgUrl: item.imgUrl ? item.imgUrl.map(url => {
                        return{
                            url: 'http://localhost:5699/' + url
                        }
                    }) : []
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

