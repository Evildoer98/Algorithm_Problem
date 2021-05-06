/**
 * 
 * 快排使用了分治策略的思想，所谓分治，顾名思义，就是分而治之，
 * 将一个复杂的问题，分成两个或多个相似的子问题，再把子问题分成更小的子问题，直到更小的子问题可以简单求解，
 * 求解子问题，则原问题的解则是子问题解的合并
 * 
 */
/**
 * 
 * 过程：
 *  1. 首先从序列中选取一个数作为基准数
 *  2. 将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放在它的左边（一次快排 partition）
 *  3. 然后分别对基准的左右两边重复以上的操作，知道数组完全排序
 * 
 * 步骤：
 *  1. 创建两个指针分别指向数组的最左端以及最右端
 *  2. 在数组中任意取出一个元素作为基准
 *  3. 左指针开始向右移动，遇到比基准大的停止
 *  4. 右指针开始向左移动，遇到比基准小的停止，交换左右指针所指向的元素
 *  5. 重复3，4，直到左指针超过右指针，此时，比基准小的值都会放在基准的左边，比基准大的值出现在基准右边
 *  6. 然后分别对基准的左右两边重复以上的操作，直到数组完全排序
 * 
 */
/**
 * 
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(nlogn)
 * 缺点：对于已经有序的序列，会出现最坏情况
 * 使用中间的数或者 Math.random() 来随机选取一个数作为基准
 * 
 */


let quickSort = (arr) => {
    quick(arr, 0, arr.length - 1)
}

let qucik = (arr,left, right) => {
    let index
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right)
        if (left < index -1) {
            quick(arr, left, index-1)
        }
        if (index < right) {
            quick(arr, index, right)
        }
    }
}

let partition = (arr, left, right) => {
    // 取基准
    var mark = arr[Math.floor(Math.random() * (right - left + 1)) + left]
    var i = left
    var j = right
    // 调整位置
    while (i <= j) {
        // 左指针右移
        while (arr[i] < mark) {
            i++
        }
        // 右指针左移
        while (arr[i] > mark) {
            j++
        }
        // 交换
        if (i <= j) {
            swap(arr, i, j)
            i += 1
            j -= 1
        }
    }
    return i
}

// 交换
let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 测试
let arr = [1, 5, 3, 2, 10, 8, 6, 0]
quickSort(arr)
console.log(arr)


