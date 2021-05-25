/**
 * 给定一个按照升序排序的整数数组 nums，和一个目标值 target，找出给定目标值在数组中的开始位置和结束位置
 * 时间复杂度必须是 O(logn)
 * 数组中不存在目标值，返回[-1, -1]
 * 
 * eg1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * eg2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 */

var nums = [5,7,7,8,8,10], target = 8
var nums1 = [5,7,7,8,8,10], target1 = 6

var f = function (nums, target) {
    var low = 0
    var high = nums.length - 1
    var middle, temp
    while (low < high) {
        middle = Math.floor((low + high) / 2)
        temp = nums[middle]
        if (target < temp) {
            high = middle - 1
        } else if (target > temp) {
            low = middle + 1
        } else if (temp === target) {
            high = middle - 1
        }
    }
    return [low, high]
}

console.log(f(nums, target));
console.log(f(nums1, target1));