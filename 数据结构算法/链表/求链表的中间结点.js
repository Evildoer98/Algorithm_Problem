/**
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点
 * 如果有两个中间结点，则返回第二个中间结点
 * 
 * 输入：[1, 2, 3, 4, 5]
 * 输出：此列表中的结点 3 （序列化形式 [3, 4, 5]）
 * 返回的结点值为 3
 * 
 * 注意：返回了一个 ListNode 类型的对象 ans 
 * 这样：ans.val = 3, ans.next.val = 4, ans.next.next.val = 5，以及 ans.next.next.next = NUll
 * 
 * 输入：[1, 2, 3, 4, 5, 6] 
 * 输出：此列表中的结点 4 (序列化形式：[4,5,6])
 * 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 */

// 法一：遍历将节点放在数组中，取中间值
var middleNode = function (head) {
    if (!head) {
        return []
    }
    var arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    // ceil() 向上取整
    return arr[Math.ceil((arr.length-1) / 2)]
}

// 法二：双指针。快指针走两步，慢指针走两步，快指针走完，慢指针则为中间值
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var middleNode = function (head) {
    if (!head) {
        return []
    }
    var fast = head
    var slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}