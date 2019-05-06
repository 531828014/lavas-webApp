import {$ajax_fetch} from '../../http-service'
//成为设计师
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/User/Desin',
            data: {
                Id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                resolve(data)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

