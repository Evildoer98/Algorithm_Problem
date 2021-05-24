/**
 * 采用的是 分治思想
 * 分治，就是分而治之，将一个问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了
 * 
 * 思想：排序一个数组，把数组从中间分成前后两部分，然后对前后两部分进行排序，再将排好序的两部分合并在一起，这样这个数组都有序了
 * 
 */

const mergeSort = function (arr) {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = function (left, right) {
    const res = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length) {
        res.push(left.shift())
    }
    while (right.length) {
        res.push(right.shift())
    }
    return res
}

// 测试
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');
// arr : [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// 归并排序耗时: 0.739990234375ms
