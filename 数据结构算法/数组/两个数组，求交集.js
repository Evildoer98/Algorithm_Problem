/**
 * 
 * 给定两个数组，编写一个函数来计算它们的交集
 * 要求：输出结果中的每个元素一定是唯一的，不考虑输出结果的顺序
 * eg：
 *  输入: nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出: [2]
 * 
 *  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  输出: [9,4]
 */

var nums1 = [1,2,2,1], nums2 = [2,2]
var nums3 = [4,9,5], nums4 = [9,4,9,8,4]
// 法一：使用 indexOf 以及 Set 去重
const intersection = function (nums1, nums2) {
    let arr1 = [...new Set(nums1)]
    // console.log(arr1);
    let arr2 = [...new Set(nums2)]
    // console.log(arr2);
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            res.push(arr1[i])
        } 
    }
    return res
}
console.log(intersection(nums1, nums2));
console.log(intersection(nums3, nums4));

// 法二：使用 entries 和 includes
var intersection1 = function (nums1, nums2) {
    // 去除数组中重复的数据
    let arr1 = Array.from(new Set(nums1))
    let arr2 = Array.from(new Set(nums2))
    // 结果集
    let result = []
    // entries() 方法返回一个数组的迭代对象，改对象包含数组的键值对（key/value）
    // 迭代对象中数组的索引值作为 key，数组元素作为 value
    for(let [key, value] of arr1.entries()) {
        if (arr2.includes(value)) {
            result.push(value)
        }
    }
    return result
}

// 法三
const intersection2 = (...arrs) => {
    return Array.from(new Set(arrs.reduce( (total, arr) => {
        return arr.filter( item => total.includes(item) )
    })))
}

// 法四
const intersection3 = function (nums1, nums2) {
    const map = {}, ans = []
    nums1.forEach(element => {
        map[element] = true
    });
    nums2.forEach(element => {
        if (map[element]) {
            ans.push(element)
        }
    })
    return ans
}

/**
 * 拓展  找并集 和 差集
 */
// 找并集
const union = function (nums1, nums2) {
    let arr1 = [...new Set(nums1)]
    let arr2 = [...new Set(nums2)]
    let res = arr1.concat(arr2)
    return res
}

// 找差集
const different = function (nums1, nums2) {
    let arr1 = [...new Set(nums1)]
    let arr2 = [...new Set(nums2)]
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i])) {
            arr2.pop(arr[i])
        }
    }
    return arr2
}