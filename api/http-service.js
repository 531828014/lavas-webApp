import axios from 'axios'
import {getUserInfo} from '../utils/storage'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:5699/'; //填写域名
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置请求拦截器
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        if (!config.data.noCarryToken && config.data.noCarryToken !== true) {
            config.headers.Authorization = 'bearer ' + getUserInfo().token
        }
    }
    if (config.method === 'get') {
        if (!config.params.noCarryToken && config.params.noCarryToken !== true) {
            config.headers.Authorization = 'bearer ' + getUserInfo().token
        }
    }
    return config
}, err => {
    console.log(err)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log('错误请求')
                break;
            case 401:
                console.log('未授权，请重新登录')
                break;
            case 403:
                console.log('拒绝访问')
                break;
            case 404:
                console.log('请求错误,未找到该资源')
                break;
            case 405:
                console.log('请求方法未允许')
                break;
            case 408:
                console.log('请求超时')
                break;
            case 500:
                console.log('服务器端出错')
                break;
            case 501:
                console.log('网络未实现')
                break;
            case 502:
                console.log('网络错误')
                break;
            case 503:
                console.log('服务不可用')
                break;
            case 504:
                console.log('网络超时')
                break;
            case 505:
                console.log('http版本不支持该请求')
                break;
            default:
                console.log(`连接错误${err.response.status}`)
        }
    } else {
        console.log('连接到服务器失败')
    }
    return Promise.resolve(err.response)
})

// 封装get方法
export function $ajax_fetch(config) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'get',
            params: {}
        }
        let {data, ...temp} = config
        temp.params = data ? data : {}
        let params = Object.assign(option, temp)
        axios(params).then(res => {
            resolve(res)
        }).catch(err => {
            reject()
        })
    })
}

// 封装post方法
export function $ajax_post(config) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'post',
            data: {}
        }
        let params = Object.assign(option, config)
        axios(params).then(res => {
            resolve(res)
        }).catch(err => {
            reject()
        })
    })
}
