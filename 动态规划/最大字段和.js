/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 * 
 * eg：
 *  输入：[-2,1,-3,4,-1,2,1,-5,4]
 *  输出：6
 *  解释：连续子数组 [4, -1, 2, 1] 的和最大，为 6
 */
var nums = [-2,1,-3,4,-1,2,1,-5,4]
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var f = function (nums) {
    let pre = 0
    let max = nums[0]
    for(const num of nums) {
        if (pre > 0) {
            pre += num
        } else {
            pre = num
        }
        max = Math.max(max, pre)
    }
    return max
}
console.log(f(nums));
/**
 * 动态规划（Dynamic Programming, DP）是一种将复杂问题分解成小问题求解的策略，但也分治算法不同的是，分治算法要求各子问题相互独立，而动态规划各子问题是相互关联的
 * （分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，在把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并）
 * 
 * 使用动态规划求解问题时，需要遵循以下几个重要步骤
 *      定义子问题
 *      实现需要反复执行解决的子问题部分
 *      识别并求解出边界条件
 * 
 * 第一步：定义子问题
 *  动态规划是将整个数组归纳考虑，假设已经知道了以第 i-1 个数结尾的连续子数组的最大和 dp[i-1],
 *  显然以第 i 个数结尾的连续子数组的最大和的可能取值要么为 dp[i-1] + nums[i]，
 *  要么就是 nums[i] 单独成一组，也就是 nums[i] ，在这两个数中去最大值
 * 
 * 第二步：实现需要反复执行解决的子问题部分
 *  dp[n] = Math.max(dp[n-1]+nums[n], nums[n])
 * 
 * 第三步：识别并求解出边界条件
 *  dp[0] = nums[0]
 */