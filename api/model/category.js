
class Category {
    constructor({id, category, name, icon}) {
        this.id = id
        this.category = category 
        this.name = name
        this.icon = icon
    }
}

export function createCategory(data) {
    return new Category(data)
}

export function initCategory() {
    return new Category({
        id: '',
        category: '', 
        name: '', // 
        icon: ''
    })
}