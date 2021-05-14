/**
 * 给定链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 * eg：
 *  给定一个链表：1 -> 2 -> 3 -> 4 -> 5，和 n = 2
 *  当删除了倒数第二个节点，链表变为 1 -> 2 -> 3 ->5
 * 
 * 给定的 n 保证是有效的
 * 
 * 进阶：尝试使用一趟扫描
 */
// 法一：添加 preHead 结点，快慢指针
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var remove1 = function (head, n) {
    let preHead = new ListNode(0)
    preHead.next = head
    let fast = preHead
    let slow = preHead
    // fast 先走 n+1 步
    while (n--) {
        fast = fast.next
    }
    // slow 和 fast 一起走
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return preHead.next
}
// 法二：单独处理倒数第 n 节点，快慢指针
var remove2 = function (head, n) {
    let fast = head
    let slow = head
    while(--n) {
        fast = fast.next
    }
    if (!fast.next) {
        return head.next
    }
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}
