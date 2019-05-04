// 用户
class UserInfo {
    constructor({id, number, password, name, contactNumber, idNumber, email}) {
        this.id = id
        this.number = number // 账号
        this.password = password // 密码
        this.name = name // 姓名
        this.contactNumber = contactNumber // 联系方式
        this.idNumber = idNumber
        this.email = email
    }
}

export function createUser(data) {
    return new UserInfo(data)
}

export function initUser() {
    return new UserInfo({
        id: '',
        number: '', // 账号
        password: '', // 密码
        name: '',
        contactNumber: '',
        idNumber: '',
        email: ''
    })
}