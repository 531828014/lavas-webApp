import {$ajax_fetch} from '../../http-service'
import {createUser} from '../../model/user'

//
export default function() {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/User/List',
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data.data ? data.data.data.map(item => createUser ({
                    id: item.Id,
                    number: item.number, 
                    password: item.password, 
                    name: item.name,
                    contactNumber: item.contactNumber,
                    idNumber: item.idNumber,
                    email: item.email,
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

