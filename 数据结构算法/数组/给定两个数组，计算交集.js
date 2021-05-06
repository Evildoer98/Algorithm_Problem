// Map 时间复杂度 O(n)

var intersection = function (nums1, nums2) {
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

var intersection = function (nums1, nums2) {
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
function intersection (arr1, arr2) {
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

