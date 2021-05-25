/**
 * 1. 二分查找，顾名思义，就是不断将数据范围（假设为 n ）分成两部分，这两个部分就分别成了性质相同的子问题（数据规模 n/2）。往往根据题意，我们能直接去掉其中一个子问题。这样不断分割，知道遇到最小可以直接解决的子问题，回溯
 * 2. 时间复杂度：O(logn)
 * 
 * 二分查找易错点：
 *  1. 循环退出条件是 low <= high，注意是 <=
 *  2. mid 的取值是 Math.floor((low + high) / 2)
 *  3. low、high 每次更新的时候，low = mid + 1 high = mid - 1
 * 
 * 二分查找的局限性
 *  1. 针对的对象必须是数组结构，因为是通过下标来随机访问元素
 *  2. 数组必须有序
 *  3. 数组太长不合适，直接使用顺序查找即可
 *  4. 数组太长不合适，数组要求连续的内存空间，数组太长不利于存储
 * 
 */

function binarySearch (items, item) {
    var low = 0
    var high = items.length - 1
    var middle, temp
    while (low <= high) {
        middle = Math.floor((low + high) / 2)
        temp = items[middle]
        if (temp < item) {
            low = middle + 1
        } else if (temp > item) {
            high = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

var arr = [3, 4, 10, 23, 45, 56, 89]
console.log(binarySearch(arr, 45));
