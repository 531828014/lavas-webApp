import storage from 'good-storage'

const User_Info_Key = 'userInfo' // 用户信息本地存储的key
const Server_Address_Key = 'serverAddress' // 服务器地址本地存储的key
const Router_List_Key = 'routerList' // 所有路由列表本地存储的key
const Base_Data_Prefix_Key = 'base-data-' // 所有基础数据信息前缀
const Font_Size_Key = 'global-font-size' // 网站全局字体大小
const Process_Number_Key = 'process-number-' // 所有流程表单编号前缀
const Not_Clear_Items = ['global-font-size', 'routerList', 'loglevel:webpack-dev-server'] // 清除本地存储时忽略清除的key
const System_Parameter_Key = 'system-parameter' // 系统参数

export function setStorage(key, value) {
    storage.set(key, value)
    return value
}

export function getStorage(key, value) {
    return storage.get(key, value)
}

// 清空本地存储
export function clearStorage() {
    let removeList = []
    storage.forEach(key => {
        let isExit = Not_Clear_Items.some(item => item === key) // 是否时忽略清除的key
        let isInclude = key.includes(Process_Number_Key) // 是否是表单编号的key
        if (!isExit && !isInclude) {
            removeList.push(key)
        }
    })
    removeList.forEach(key => {
        storage.remove(key)
    })
}
// 处理用户信息
export function saveUserInfo(info) {
    storage.set(User_Info_Key, info)
    return info
}

export function getUserInfo() {
    return storage.get(User_Info_Key, {})
}

export function clearUserInfo() {
    storage.remove(User_Info_Key)
    return {}
}

// 处理服务器地址
export function saveServerAddress(address) {
    storage.set(Server_Address_Key, address)
    return address
}

export function getServerAddress() {
    return storage.get(Server_Address_Key, '')
}

// 处理路由列表
export function saveRouterList(list) {
    storage.set(Router_List_Key, list)
    return list
}

export function getRouterList() {
    return storage.get(Router_List_Key, [])
}

// 处理基础数据列表
export function saveBaseData(item) {
    let key = Base_Data_Prefix_Key + item.code
    storage.set(key, item.items)
    return item.items
}

export function getBaseData(code) {
    let key = Base_Data_Prefix_Key + code
    return storage.get(key, [])
}

// 获取某个系统字典的名称
export function getBaseDataName(val, code) {
    let values = getBaseData(code)
    let index = values.findIndex(item => val === item.val)
    return index >= 0 ? values[index].name : ''
}

// 处理字体大小
export function saveFontSize(size) {
    storage.set(Font_Size_Key, size)
    return size
}

export function getFontSize() {
    return Number(storage.get(Font_Size_Key, 10))
}

// 处理表单编号
export function saveProcessNumber(number, type) {
    if (type) {
        let key = Process_Number_Key + type
        storage.set(key, number)
    }
}

export function getProcessNumber(type) {
    let key = Process_Number_Key + type
    if (storage.has(key)) {
        return storage.get(key, '')
    } else {
        return undefined
    }
}

// 处理系统参数
export function saveSystemParameter(parameterList) {
    let ret = {}
    parameterList.forEach(item => {
        Object.assign(ret, {[item.code]: item.value})
    })
    storage.set(System_Parameter_Key, ret)
    return ret
}

export function getSystemParameter() {
    return storage.get(System_Parameter_Key, {})
}