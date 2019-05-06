// 处理树形结构数据，获取所有数组
// export function initTreeData(dataContainer, treeData, currentNodeData, code) {
//     let attr = code ? code : 'id'
//     treeData.forEach(item => {
//         let newCurrentNodeData = []
//         if (!currentNodeData) {
//             let temp = []
//             temp.push(item[attr])
//             newCurrentNodeData = [].concat(temp)
//             dataContainer.push(temp)
//         } else {
//             let temp = [].concat(currentNodeData)
//             temp.push(item[attr])
//             newCurrentNodeData = [].concat(temp)
//             dataContainer.push(temp)
//         }
//         if (item.children && item.children.length > 0) {
//             initTreeData(dataContainer, item.children, newCurrentNodeData, attr)
//         }
//     })
//     return dataContainer
// }

// // 处理浮点数乘法的精度问题
// export function floatMul(numb1, numb2) {
//     let m = 0, s1 = numb1.toString(), s2 = numb2.toString()
//     let m1 = s1.split('.')[1] ? s1.split('.')[1].length : 0
//     let m2 = s2.split('.')[1] ? s2.split('.')[1].length : 0
//     m = m1 + m2
//     return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
// }

// // 解决浮点运算的加法问题
// export function floatAdd(numb1, numb2) {
//     let m = 0, s1 = numb1.toString(), s2 = numb2.toString()
//     let m1 = s1.split('.')[1] ? s1.split('.')[1].length : 0
//     let m2 = s2.split('.')[1] ? s2.split('.')[1].length : 0
//     m = Math.pow(10, Math.max(m1, m2))
//     return (Number(s1) * m + Number(s2) * m) / m
// }

// // 处理数组加法
// export function floatArrAdd(arr) {
//     return arr.reduce((sum, item) => {
//         return floatAdd(sum, item)
//     }, 0)
// }

// // 将数组分页
// export function splitArray(list, pageSize) {
//     let ret = []
//     if (list.length < pageSize) {
//         ret.push(list)
//     } else {
//         let count = Math.ceil(list.length / pageSize)
//         for(let i = 0; i < count; i++) {
//             ret.push(list.splice(0, pageSize))
//         }
//     }
//     return ret
// }

// 获取当前年月日字符串
// export function getNowYMD() {
//     let date = new Date()
//     let year = date.getFullYear()
//     let month = date.getMonth() + 1
//     let day = date.getDate()
//     return `${year}-${month}-${day}`
// }

// // 过滤时间字符串的时分秒
// export function filterDate(value) {
//     if (!value) return ''
//     value = value.toString()
//     let newval = value.split(' ', 1)
//     return newval[0]
// }