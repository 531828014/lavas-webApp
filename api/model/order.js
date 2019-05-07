import {initGoods, createGoods} from './goods'
// 订单
class Order {
    constructor({id, userId, orderGoodsId, address, contactNumber, total, sellingPrice, title, goodsId, remark}) {
        this.id = id
        this.userId = userId 
        this.orderGoodsId = orderGoodsId 
        this.address = address 
        this.contactNumber = contactNumber // 联系方式
        this.total = total
        this.remark = remark
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
        userId: '', 
        orderGoodsId: '', 
        address: '',
        contactNumber: '',
        total: 0,
        goods: initGoods(),
        remark: ''
    })
}