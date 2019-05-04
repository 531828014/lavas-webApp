import {initGoods, createGoods} from './goods'
// 售后
class Order {
    constructor({id, orderId, afterSaleMode, address, contactNumber, total, sellingPrice, title, goodsId}) {
        this.id = id
        this.orderId = orderId // 订单编号
        this.afterSaleMode = afterSaleMode // 售后方式
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
        orderId: '', // 订单编号
        afterSaleMode: '', // 
        goods: initGoods(),
    })
}