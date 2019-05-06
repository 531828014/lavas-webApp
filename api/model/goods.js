// 商品
class Goods {
    constructor({id, title, briefIntroduction, purchasePrice, sellingPrice, category, designer, imgUrl, number}) {
        this.id = id
        this.title = title // 标题
        this.briefIntroduction = briefIntroduction // 简介
        this.purchasePrice = purchasePrice // 进货价
        this.sellingPrice = sellingPrice // 销售价
        this.category = category // 品类
        this.designer = designer // 厂家/设计师
        this.imgUrl = imgUrl // 图片地址
        this.number = number // 数量
    }
}

export function createGoods(data) {
    return new Goods(data)
}

export function initGoods() {
    return new Goods({
        id: '',
        title: '', 
        briefIntroduction: '', 
        purchasePrice: '',
        sellingPrice: '',
        category: '',
        designer: '',
        imgUrl: [],
        number: 0
    })
}