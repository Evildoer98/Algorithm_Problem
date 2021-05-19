/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值
 * eg：
 *  输入：nums = [1, 3, -1, -3, 5, 3, 6, 7]，和 k = 3
 *  输出：[3, 3, 5, 5, 6, 7]
 * 
 *  解释：
 *     滑动窗口的位置      最大值
 * [1 3 -1] -3 5 3 6 7      3
 * 1 [3 -1 -3] 5 3 6 7      3
 * 1 3 [-1 -3 5] 3 6 7      5
 * 1 3 -1 [-3 5 3] 6 7      5
 * 1 3 -1 -3 [5 3 6] 7      6
 * 1 3 -1 -3 5 [3 6 7]      7 
 * 
 * 提示：
 *  你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */

var nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// 法一：暴力
/**
 * 过程
 *    temp             res
 *  1,   3.  -1         3
 *  3,  -1,  -3         3
 * -1,  -3,   5         5
 * -3,   5,   3         5
 *  5,   3,   6         6
 *  3,   6,   7         7
 * 
 * 时间复杂度：O(n*k)
 * 空间复杂度：O(n)
 */
const f1 = function (nums, k) {
    if (k === 1) {
        return nums
    }
    let temp = []
    let res = []
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i])
        if (i >= k-1) {
            res.push(Math.max(...temp))
            temp.shift()
        }
    }
    return res
}
console.log(f1(nums, k));

// 法二：双端队列
/**
 * 思路：使用一个双端队列存储窗口中值的索引，并且保证双端队列中第一个元素永远是最大值，
 * 那么只需要遍历一次 nums，就可以取到每次移动时的最大值
 * 
 *  1. 比较当前元素 i 和双端队列第一个元素（索引值），相差 >= k 时队首出列
 *  2. 依次比较双端队列的队尾与当前元素 i 对应的值，队尾元素值较小时出列，直至不小于当前元素 i 的值时，或者队列为空，这是为了保证当队头出队时，新的队头依旧是最大值
 *  3. 当前元素入队
 *  4. 从第 k 次遍历，依次把最大值（双端队列的队头）添加到结果 result 中
 */
const f2 = function (nums, k) {
    let temp = []
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i - temp[0] >= k) {
            temp.shift()
        }
        while (nums[temp[temp.length-1]] <= nums[i]) {
            temp.pop()
        }
        temp.push(i)
        if (i >= k - 1) {
            res.push(nums[temp[0]])
        }
    }
    return res
}
console.log(f2(nums, k));