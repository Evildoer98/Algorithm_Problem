/**
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * （若队列中没有元素，deleteHead 操作返回 -1）
 * 
 * eg1：
 * 输入：["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null, null, 3, -1]
 * 
 * eg2：
 * 输入：["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null, -1, null, null, 5, 2]
 * 
 * 提示：
 * 1 <= values <= 10000
 * 最多会对 appendTail 、deleteHead 进行 10000 次调用
 */

// 法一
/**
 * 思路：栈后进先出，队列先进先出
 * 双栈可以实现序列倒置：假设有 stack1 = [1, 2, 3]，stack2 = []，
 * 如果循环出栈 stack1 并将出栈元素进栈 stack2，则循环结束后，stack1 = []，stack2 = [3, 2, 1]，
 * 即通过 stack2 实现了 stack1 中元素的倒置
 * 当需要删除队列首元素时，仅仅需要 stack2 出栈即可；
 * 当 stack2 为空时，出队就需要将 stack1 元素倒置倒 stack2，stack2 再出队即可；
 * 如果 stack1 也为空，即队列中没有元素，返回 -1
 * 
 * 时间复杂度：appendTail 的时间复杂度为O(1)，deleteHead 的时间复杂度为 O(n)
 * 空间复杂度：O(n)
 */

const CQueue = function () {
    this.stack1 = []
    this.stack2 = []
}
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
}
CQueue.prototype.deleteHead = function () {
    if (this.stack2.length) {
        return this.stack2.pop()
    }
    if (!this.stack1.length) {
        return -1
    }
    while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop()
}