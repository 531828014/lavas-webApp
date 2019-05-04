import {$ajax_fetch} from '../../http-service'
import {createCategory} from '../../model/category'

//
export default function() {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Category/List',
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data ? data.data.map(item => createCategory ({
                    id: item.Id,
                    name: item.name,
                    category: item.category,
                    icon: item.icon
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

