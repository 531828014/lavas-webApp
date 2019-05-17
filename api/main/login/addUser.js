import {$ajax_post} from '../../http-service'
import {createUser} from '../../model/user'
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/User/AddUser',
            data: {
                number: from.number,
                name: from.number,
                password: from.password,
            }
        }
        $ajax_post(option).then(data => {
            if (data.data.Result) {
                let item = data.data.data
                let ret = {
                    id: item.Id,
                    number: item.number, 
                    password: item.password, 
                    name: item.name,
                    contactNumber: item.contactNumber,
                    idNumber: item.idNumber,
                    email: item.email,
                }
                resolve(ret)
            } else {
                reject()
            }
        })
    })
}