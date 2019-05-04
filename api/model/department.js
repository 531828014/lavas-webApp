// 部门
class Department {
    constructor({id, name, parentId, staffList, postList, sortIndex, shortName}) {
        this.id = id
        this.name = name // 部门名称
        this.parentId = parentId // 上级部门id
        this.staffList = staffList // 员工列表
        this.postList = postList // 岗位列表
        this.sortIndex = sortIndex // 排序号
        this.shortName = shortName // 简称
    }
}

export function createDept(data) {
    return new Department(data)
}

export function initDept() {
    return new Department({
        id: '',
        name: '', // 部门名称
        parentId: '', // 上级部门id
        staffList: [],
        postList: [],
        sortIndex: 1,
        shortName: ''
    })
}

// 职位
class Post {
    constructor({id, deptId, name}) {
        this.id = id,
        this.deptId = deptId // 部门id
        this.name = name // 职位名称
    }
}

export function createPost(data) {
    return new Post(data)
}

export function initPost() {
    return new Post({
        id: '',
        deptId: '',
        name: ''
    })
}