/**
 * 假设正在爬楼梯，需要 n 阶才能到达楼顶
 * 每次可以爬一个或2个台阶，有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数
 * 
 * eg1：
 *  输入：2
 *  输出：2
 *  解释：有两种方法可以爬到楼顶
 *  1、 1 + 1
 *  2.  2
 * 
 * eg2：
 *  输入：3
 *  输出：3
 *  解释：有三种方法可以爬到楼顶
 *  1、1 + 1 + 1
 *  2、1 + 2
 *  3. 2 + 1
 * 
 */

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var f1 = function (n) {
    let res = []
    res[0] = 1
    res[1] = 1
    for (let i = 2; i <= n; i++) {
        res[i] = res[i-1] + res[i-2]
    }
    return res[n]
}
console.log(f1(2));
console.log(f1(3));

/**
 * 优化空间复杂度：O(1)
 */
var f2 = function (n) {
    let res = 1
    let n0 = 1
    let n1 = 1
    for (let i = 0; i <= n; i++) {
        res = n0 + n1
        n1 = n2
        n2 = res        
    }
    res
}
console.log(f1(2));
console.log(f1(3));