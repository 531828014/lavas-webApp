import {initGoods, createGoods} from './goods'
// 订单
class Order {
    constructor({id, userId, orderGoodsId, address, contactNumber, total, sellingPrice, title, goodsId}) {
        this.id = id
        this.userId = userId // 账号
        this.orderGoodsId = orderGoodsId // 密码
        this.address = address // 姓名
        this.contactNumber = contactNumber // 联系方式
        this.total = total
        this.goods = createGoods({
            id: goodsId,
            title: title, // 标题
            sellingPrice: sellingPrice // 销售价
        })
    }
}

export function createOrder(data) {
    return new Order(data)
}

export function initOrder() {
    return new Order({
        id: '',
        userId: '', // 账号
        orderGoodsId: '', // 密码
        address: '',
        contactNumber: '',
        total: '',
        goods: initGoods(),
    })
}