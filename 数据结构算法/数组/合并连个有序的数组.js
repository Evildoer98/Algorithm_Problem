/**
 * 
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * 
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。
 * 
 * eg：
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 * 
 */
// 时间复杂度 O(n+m)
/**
 * 
 *  nums1 和 nums2 有序，若把 nums2 全部合并到 nums1，则合并后的 nums1 长度为 m + n
 *  
 *  从下标 m + n - 1 的位置填充 nums1，比较 nums1[len1] 与 nums2[len2] 的大小，将最大值写入 nums[len]，即
 *    1. nums1[len1] >= nums2[len2] , nums[len--] = nums1[len1--] , 这里的 -- 是因为写入成功，下标自动减一，继续向前比较
 *    2. 否则 nums[len--] = nums2[len2--]
 *  边界条件：
 *    1. 若 len1 < 0，即 len2 >= 0，此时 nums1 已重写入，nums2 还未合并完，仅仅需要将 nums2 的剩余元素 （0...len）写入 nums2 即可，写入后，合并完成
 *    2. 若 len2 < 0，此时 nums2 已全部合并到 nums1，合并完成
 * 
 */
const merge = function(nums1, m, nums2, n){
    let len1 = m -1
    let len2 = n - 1
    let len = m + n - 1 
    while (len2 > 0) {
        if (len1 < 0) {
            num1[len--] = num2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
}

// 不改变原数组
const merge2 = function(nums1,nums2){
    var len1 = nums1.length - 1
    var len2 = nums2.length - 1
    var len = nums1.length + nums2.length - 1
    var [...nums] = nums1 
    while (len2 >= 0) {
        if (len1 < 0) {
            nums[len--] = nums2[len2--]
        }
        nums[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    } 
    return nums
}

// 调用 api 
/**
 * sort ： O(nlogn)
 */
const merge3 = function (nums1, nums2) {
    var arr = nums1.concat(nums2)
    return arr.sort((a, b) => a - b)
}

// 归并排序---该算法采用的分治法
const merge4 = function (nums1, nums2) {
    var result = []
    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] < nums2[0]) {
            result.push(nums1.shift())
        } else {
            result.push(nums2.shift())  
        }
    }    
    return result.concat(nums1).concat(nums2)
}

const mergeSort = function (array) {
    if (array.length === 1) {
        return array
    }
    var middle = Math.floor(array.length / 2)
    var left = array.slice(0, middle)
    var right = array.slice(middle)
    return merge4(mergeSort(left), mergeSort(right))
}