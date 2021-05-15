/**
 * 
 * 给定两个用链表表示的整数，每个结点包含一个数位
 * 这些数位是反向存放的，也就是个位排在链表首部
 * 编写函数对这个两个整数求和，并用链表的形式返回结果
 * 
 * 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即 617 + 295
 * 输出：2 -> 1 -> 9，即 912
 * 进阶：思考一下，假设这些数位都是正向存放的，又该如何解决？
 * 
 */

/**
 * 思路：1. 遍历链表，将值转换成正常的数值
 *      2. 再将相加的值按照个十百千位放置在数组中
 *      3. 将数组中的值依次赋给链表
 */
var f = function (l1, l2) {
    var i = 1
    var sum1 = 0
    var j = 1
    var sum2 = 0
    var res = 0
    var l3 = new ListNode()
    while (l1) {
        sum1 += l1.val * j
        j = j * 10
        l1 = l1.next
    }
    while (l2) {
        sum2 += l2.val * i
        i = i * 10
        l2 = l2.next
    }
    res = sum1 + sum2
    var nums = []
    while (res) {
        nums.push(res % 10)
        res = parseInt(res / 10)
    }
    for (let i = len - 1; i >= 0; i--) {
        l3.val = nums[i]
        l3 = l3.next
    }
    return l3
}