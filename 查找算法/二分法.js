/**
 * 1. 二分查找，顾名思义，就是不断将数据范围（假设为 n ）分成两部分，这两个部分就分别成了性质相同的子问题（数据规模 n/2）。往往根据题意，我们能直接去掉其中一个子问题。这样不断分割，知道遇到最小可以直接解决的子问题，回溯
 * 2. 时间复杂度：O(logn)
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
