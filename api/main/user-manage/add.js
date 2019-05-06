import {$ajax_post} from '../../http-service'

export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/User/Add',
            data: {
                number: from.number,
                password: from.password,
                name: from.name,
                contactNumber: from.contactNumber,
                idNumber: from.idNumber,
                email: from.email,
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