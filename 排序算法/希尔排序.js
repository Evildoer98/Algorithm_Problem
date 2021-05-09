/**
 * 
 * 插入序列
 *   1. 原理：插入排序的工作原理是通过构建有序序列，对于未排序数据，
 *           在已排序序列中从后向前扫描，找到相应位置并插入
 *   
 *   2. 核心思想：取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，
 *               并保证已排序区间数据一直有序。重复这个过程，直到未排序区间中元素为空 
 * 
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 
 */
// 插入排序
function insertSort (arr) {
    let len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}

/**
 *
 * 希尔排序
 *  
 * 
 */