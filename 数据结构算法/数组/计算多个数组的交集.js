/**
 * 
 * 计算多个数组的交集
 * 要求：输出结果中的每个元素一定是唯一的
 * 
 */

var intersection = function (nums1, nums2) {
    // 去除数组中重复的数据
    let arr1 = Array.from(new Set(nums1))
    let arr2 = Array.from(new Set(nums2))
    // 结果集
    let result = new Array()
    // entries() 方法返回一个数组的迭代对象，改对象包含数组的键值对（key/value）
    // 迭代对象中数组的索引值作为 key，数组元素作为 value
    for(let [key, value] of arr1.entries()) {
        if (arr2.includes(value)) {
            result.push(value)
        }
    }
    return result
}

const getIntersection = (...arrs) => {
    return Array.from(new Set(arrs.reduce( (total, arr) => {
        return arr.filter( item => total.includes(item) )
    })))
}