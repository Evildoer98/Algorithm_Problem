/**
 * 
 * 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * 
 */

// 法一：调用 api

// 扁平化
const flattenDeep = (array) => array.flat(Infinity)
// 去重
const unique = (array) => Array.from(new Set(array))
// 排序
const sort = (array) => array.sort((a, b) => a - b)
// 函数组合
const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)
// 组合后函数
const flatten_unique_sort = compose(sort, unique, flattenDeep)
// 测试
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log(flatten_unique_sort(arr));

// 法二：通过 array.some() + concat 来实现 flat()
const f2 = function (arr) {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    arr = [...new Set(arr)].sort((a, b) => a - b)
    return arr
}
console.log(f2(arr));

// 法三：分别实现 数组扁平化、数组去重、数组排序
const myflat = function (arr) {
    return arr.reduce((res, item) => {
        res = res.concat(Array.isArray(item) ? myflat(item) : item)
    })
}

// // 数组扁平化
// function flat (arr) {
//     return arr.reduce((res, item) => {
//         res = res.concat(Array.isArray(item) ? flat(item) : item)
//         return res
//     }, [])
// }
// // 调用 api
// const flattenDeep = (array) => array.flat(Infinity)

// /**
//  * ---------------------------------------------
//  */
// // 数组去重
// function unique(arr) {
//     return arr.reduce((res, item) => {
//         if (!res.includes(cur)) {
//             res.push(item)
//         }
//         return res
//     }, [])
// }
// // 调用 api
// const unique = (array) => Array.from(new Set(array))


// /**
//  * ---------------------------------------------
//  */
// // 排序
// // 调用 api
// const sort = (array) => Array.from(new Set(array))

// // 冒泡排序
// function bulubuluSort (arr) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
 
// // 快速排序
// function quickSort (arr) {
//     if (arr.length <= 1) {
//         return arr
//     }
//     const left = []
//     const right = []
//     const mid = arr.shift(arr)

//     arr.forEach((item) => {
//         if (item <= mid) {
//             left.push(item)
//         } else {
//             right.push(item)
//         }
//     })
//     return quickSort(left).concat(mid).concat(quickSort(right))
// }