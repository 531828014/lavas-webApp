// 角色
class Role {
    constructor({id, remark, roleName}) {
        this.id = id //数据Id
        this.remark = remark // 说明
        this.roleName = roleName // 角色名称
    }
}
export function createRoleData(data) {
    return new Role(data)
}

export function initRoleData() {
    return new Role({
        id: '',
        remark: '',
        roleName: '',
    })
}

class RoleTree {
    constructor({id, depth, label, type, parentId, children}) {
        this.id = id 
        this.depth = depth 
        this.label = label 
        this.type = type 
        this.parentId = parentId 
        this.isIndeterminate = false 
        this.checkList = [] 
        this.children = children ? children.map(item => createRoleTree({
            depth: item.depth,
            id: item.id,
            label: item.label,
            type: item.type,
            parentId: [...this.parentId, item.parentId],
            isIndeterminate: false,
            checkList: [],
            children: item.children
        })) : []
    }
}
export function createRoleTree(data) {
    return new RoleTree(data)
}