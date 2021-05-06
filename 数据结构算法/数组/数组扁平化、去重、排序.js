// 数组扁平化
function flat (arr) {
    return arr.reduce((res, item) => {
        res = res.concat(Array.isArray(item) ? flat(item) : item)
        return res
    }, [])
}
// 调用 api
const flattenDeep = (array) => array.flat(Infinity)

/**
 * ---------------------------------------------
 */
// 数组去重
function unique(arr) {
    return arr.reduce((res, item) => {
        if (!res.includes(cur)) {
            res.push(item)
        }
        return res
    }, [])
}
// 调用 api
const unique = (array) => Array.from(new Set(array))


/**
 * ---------------------------------------------
 */
// 排序
// 调用 api
const sort = (array) => Array.from(new Set(array))

// 冒泡排序
function bulubuluSort (arr) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
 
// 快速排序
function quickSort (arr) {
    if (arr.length <= 1) {
        return arr
    }
    const left = []
    const right = []
    const mid = arr.shift(arr)

    arr.forEach((item) => {
        if (item <= mid) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    return quickSort(left).concat(mid).concat(quickSort(right))
}