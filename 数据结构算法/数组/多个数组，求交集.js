/**
 * 计算多个数组的交集
 * 要求：输出结果中的每个元素一定是唯一的
 */

// Map 时间复杂度 O(n)

var intersection = function (nums1, nums2) {
    let arr1 = Array.from(new Set(nums1))
    let arr2 = Array.from(new Set(nums2))
    let arr3 = new Array()
    for(let [v, k] of arr1.entries()) {
        if (arr2.includes(k)) {
            arr3.push(k)
        }
    }
    return arr3
}

var intersection1 = (...arrs) => {
    return Array.from(new Set(arrs.reduce((total, arr) => {
        return arr.filter(item => total.includes(item))
    })))
}

var intersection2 = function (nums1, nums2) {
    const map = {}, ans = []
    nums1.forEach(item => {
        map[item] = true
    })
    nums2.forEach(item => {
        if (map[item]) {
            ans.push(item)
        }
    })
    return ans
}

var intersection3 = function (nums1, nums2) {
    let map1 = new Set(nums1)
    let map2 = new Set(nums2)
    let res = []
    map1.forEach((item) => {
        if (map2.has(item)) {
            res.push(item)
        }
    })
    return res
}

// 找交集
var intersection4 = function  (arr1, arr2) {
    var has = {}, _intersection = []
    for(let ele of arr1) {
        if (!hash.hasOwnProperty(ele)) {
            hash[ele] = true
        }
    }
    for(let ele of arr2) {
        if (hash[ele]) {
            var flag = false
            if (_intersection.indexOf(ele) === -1) {
                if (ele !== ele) {
                    if (!flag) {
                        flag = true
                        _intersection.push(ele)
                    }
                } else {
                    _intersection.push(ele)
                }
            }
        }
    }
    return _intersection
}

// 找并集
function union (arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]))
}

// 找差集
function difference (arr1, arr2) {
    var set1 = new Set(arr1)
    var set2 = new Set(arr2)
    for(let ele of set1) {
        if (set2.has(ele)) {
            set2.delete(ele)
        }
    }
    return Array.from(set2)
}

