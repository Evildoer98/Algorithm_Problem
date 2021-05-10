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
var nums1 = [1,2,3]
var nums2 = [0,2,5,6]

// 法一：调用 api
/**
 * 其中 sort 在 Chorme 中使用的快排 时间复杂度为 O(nlogn)
 */
var merge1 = function (nums1, nums2) {
    var result = []
    result = nums1.concat(nums2)
    return result.sort((a, b) => a - b)
}
console.log(merge1(nums1, nums2)) // [0, 0, 0, 1, 2, 2, 3, 5, 6]

// 法二
/**
 * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 * 自动将 0 去掉了
 */
var merge2 = function (nums1, nums2) {
    if (!(nums1 instanceof Array)) {
        nums1 = []
    }
    if (!(nums2 instanceof Array)) {
        nums2 = []
    }
    return nums1.concat(nums2).filter(item => item).sort((a, b) => a - b);
}
console.log(merge2(nums1, nums2)) // [1, 2, 2, 3, 5, 6]

// 法三
var merge3 = function (nums1, m, nums2, n) {
    let len1 = m - 1
    let len2 = n - 1
    let len = m + n - 1
    while (len2 >= 0) {
        if (len1 < 0) {
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
    return nums1
}
var m = 3
var n = 4
console.log(merge3(nums1, m, nums2, n));
// 不改变原数组
var merge3_1 = function (nums1, nums2) {
    let len1 = nums1.length - 1
    let len2 = nums2.length - 1
    let len = nums1.length + nums2.length - 1
    let [...nums] = nums1
    while (len2 >= 0) {
        if (len1 < 0) {
            nums[len--] = nums2[len2--]
            continue        
        }
        nums[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
    return nums
}
console.log(merge3_1(nums1, nums2))

// 法四
/**
 * shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
 */
var merge3 = function (nums1, nums2) {
    let result = []
    while (nums1.length && nums2.length) {
        result.push(nums1[0] <= nums2[0] ? nums1.shift() : nums2.shift())
    }
    return result
}
console.log(merge3(nums1, nums2));

// 法五
/**
 * 归并排序
 */

