/**
 * 给定一个按照升序排序的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置
 * 算法时间复杂度必须是 O(logn) 级别
 * 如果数组中不存在目标值，返回 [-1,-1]
 * 
 * eg1：
 *  输入：nums = [5,7,7,8,8,10], target = 8
 *  输出: [3,4]
 * 
 * eg2：
 *  输入: nums = [5,7,7,8,8,10], target = 6
 *  输出: [-1,-1]
 */

var nums1 = [5,7,7,8,8,10], target1 = 8
var nums2 = [5,7,7,8,8,10], target2 = 6
var f = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    var begin = -1
    var end = -1
    while (left <= right) {
        if (nums[left] < target) left++
        if (nums[left] === target && begin === -1) begin = left++
        if (nums[right] > target) right--
        if (nums[right] === target &&  end === -1) end = right--
        if (begin > -1 && end > -1) break
    }
    return [begin, end]
}
// console.log(f(nums1,target1));
// console.log(f(nums2,target2));