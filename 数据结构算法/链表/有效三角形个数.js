/**
 * 给定一个包含非负整数的数组，统计可以组成三角形三条边的三元组个数
 * 
 * 输入：[2, 2, 3, 4]
 * 输出：3
 * 有效的组合是：
 *  2, 3, 4 （使用第一个 2）
 *  2, 3, 4 （使用第二个 2）
 *  2, 2, 3
 * 
 */

var arr = [2, 2, 3, 4]
// 法一：排序：利用 a + b > c
/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
var triangleNumber = function (arr) {
    let len = arr.length
    let res = []
    let count = 0
    if (!arr || len < 3) {
        return 
    }
    arr.sort((a, b) => a - b)
    for (let k = len-1; k > 1; k--) {
        let i = 0
        let j = k - 1
        while (i < j) {
            if (arr[i] + arr[j] > arr[k]) {
                // console.log(count);
                // i 和 j 中间的差值，即是比arr[i]大，比arr[j] 小的数，这样的数比 arr[i] 大 直接就能满足条件
                count += j - i
                j--
                // res.push([arr[i], arr[j], arr[k]])
                // console.log(count);
            } else {
                i++
            }
        }
    }
    return count
}
console.log(triangleNumber(arr));
