/**
 *  
 *  一个包含n个整数的数组nums，判断nums是否存在三个元素a，b，c，使得a+b+c = 0？ 请找出所有满足条件且不重复的三元组
 *  注意：答案中不可以包含重复的三元组
 * eg： nums = [-1, 0, 1, 2, -1, -4]
 *  [
 *  [-1,0,1]
 *  [-1,-1,2]
 *  ] 
 *
 */
// 排序 + 双指针
/**
 * 利用 两数之和
 * 利用双指针夹逼
 *  1. 排序，利用排序好的数组，固定一个指针 i ，夹逼选举 left 和 right
 *  
 */
var threeSum1 = function (nums) {
    const len = nums.length
    const result = []
    // nums 至少要大于三个
    if (len < 3) {
        return result
    }
    // sort 使用 Chrome 的排序是快排，时间复杂度为 O(nlogn)
    nums.sort((a, b) => a - b)
    // 如果第一个大于 0 ，三个加起来肯定大于 0
    if (nums[0] > 0) {
        return result
    }
    // 小于三个就不用考虑了
    for (let i = 0; i < len - 2; i++) {
        // 避免重复的情况
        if (i && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = len - 1
        // 双指针夹逼
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                // result.push([nums[i], nums[left++], nums[right--]])
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                // push 加了之后防止还存在重复
                while (nums[left] === nums[left - 1]) {
                    left++
                }
                while (nums[right] === right[right + 1]) {
                    right--
                }
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}
var nums = [-1, 0, 1, 2, -1, -4]
var nums2 = [-1, 0, -1, -2, 1, 4]

console.log(threeSum1(nums));
console.log(threeSum1(nums2));

