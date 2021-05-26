/**
 * 数组的每个索引作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i] (索引从0开始)。
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 * 
 * eg1：
 *  输入: cost = [10, 15, 20]
 *  输出: 15
 *  解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 * 
 * eg2：
 *  输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 *  输出: 6
 *  解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
 */
var cost1 = [10, 15, 20]
var cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var f1 = function (cost) {
    cost.push(0)
    // console.log(cost);
    let res = []
    let len = cost.length
    res[0] = cost[0]
    res[1] = cost[1]
    for (let i = 2; i <= len; i++) {
        res[i] = Math.min(res[i-1], res[i-2]) + cost[i]
        // console.log(res[i]);
    }
    // console.log(res);
    return res[len-1]
}
console.log(f1(cost1));
console.log(f1(cost2));

/**
 * 优化空间复杂度：O(1)
 */

var f2 = function (cost) {
    let len = cost.length
    let n0 = cost[0]
    let n1 = cost[1]
    for (let i = 2; i < len; i++) {
        let temp = n1
        n1 = Math.min(n0, n1) + cost[i]
        n0 = temp
    }
    return Math.min(n0, n1)
}
console.log(f2(cost1));
console.log(f2(cost2));