import {$ajax_fetch} from '../../http-service'
import {createGoods} from '../../model/goods'
//
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Commodity/Detial',
            data: {
                Id: Id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data.data.Result) {
                let ret = {}
                let table = data.data.data
                ret = {
                    id: table.Id,
                    title: table.title, 
                    briefIntroduction: table.briefIntroduction, 
                    purchasePrice: table.purchasePrice,
                    sellingPrice: table.sellingPrice,
                    category: table.category,
                    designer: table.designer,
                    number: table.number,
                    typeId: table.typeId,
                    imgUrl: table.imgList ? table.imgList.map(url => {
                        return{
                            url: 'http://localhost:5699/' + url
                        }
                    }) : []
                }
                resolve(ret)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

