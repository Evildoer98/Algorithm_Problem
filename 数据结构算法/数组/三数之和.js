/**
*  
*  一个包含n个整数的数组nums，判断nums是否存在三个元素a，b，c，使得a+b+c = 0？ 请找出所有满足条件且不重复的三元组
*  eg： nums = [-1, 0, 1, 2, -1, -4]
*  [
*  [-1,0,1]
*  [-1,-1,2]
*  ] 
*
*/

// 排序+双指针（注意重复项）
const threeSum = function(nums){
    const len = nums.length
    var res = []
    if (len < 3) {
        return res
    }
    nums.sort((a, b) => a - b)
    if (nums[0] > 0 || nums[len-1] < 0) {
        return res
    }
    for (let i = 0; i < len; i++) {
        // 防止排序后的数组中有重复的元素，影响结果，如果有重复元素直接跳出本次循环，进入下次循环
        if (i && nums[i] === nums[i-1]) {
            continue
        }
        var left = i + 1
        var right = len - 1
        while (left < right) {
            var sum = nums[i] + nums[right] + nums[left]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (nums[left] === nums[left-1]) {
                left++
                }
                while (nums[right] === nums[right+1]) {
                    right--
                }
            }else if (sum > 0) {
                right--
            }else {
                left++
            }
        }
    }
    return res
}

var nums = [-1, 0, 1, 2, -1, -4]
var nums2 = [-1, 0, -1, -2, 1, 4]
console.log(threeSum(nums));
console.log(threeSum(nums2));