/**
 * 给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * eg：
 *      给定 nums = [2, 7, 11, 15], target = 9
 *      因为 nums[0] + nums[1] = 2 + 7 = 9
 *      所以返回 [0, 1]
 */

var nums = [2, 7, 11, 15], target = 9
// 法一
/**
 * 初始化一个 map = new Map()
 * 从第一个元素开始遍历 nums
 * 获取目标值与 nums[i] 的差值，即 k = target - nums[i] ，判断差值在 map 是否存在
 *      不存在（map.has(k) 为 false），则将 nums[i] 加入到 map 中（key 为 nums[i]，value 为 i），方便查找 map 中是否存在某值，并可以通过 get() 方法直接拿到下标
 *      存在（map.has(k)），则返回[map.get(k), i]
 * 
 * 时间复杂度 O(n)
 */
const twoSum = function(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 目标值与当前值的差值
        let k = target - nums[i]
        // has() 返回一个bool值，用来表明map中是否存在指定元素
        if (map.has(k)) {
            // get() 用来获取一个map对象中的指定的元素
            return [map.get(k), i]
        }
        // set() 方法为map对象添加一个指定键(key)和值(value)的新元素
        map.set(nums[i], i)
    }
    return []
}
console.log(twoSum(nums, target))