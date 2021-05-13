/**
 * 给定一个链表，判断链表中是否有环
 *  为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引开始为 0 ）。如果 pos 是 -1，则在该链表中没有环
 * 
 * eg：
 *   输入：head = [3, 2, 0, -4], pos = 1
 *   输出：true
 *   解释：链表中由一个环，其尾部连接到第二个节点
 * 
 *   输入：head = [1, 2]，pos = 0
 *   输出：true
 *   解释：链表中有一个环，其尾部连接到第一个节点
 * 
 *   输入：head = [1]，pos = -1
 *   输出：false
 *   解释：链表中没有环
 */

// 法一：标志法
/**
 * 给每个已遍历的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表有环
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var hasCycle1 = function (head){
    while(head){
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}

// 法二：利用JSON.stringfy()不能序列化含有循环引用的结构
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var hasCycle2 = function (head){
    try{
        JSON.stringify(head)
        return false
    }catch(e){
        return true
    }
}

// 法三：快慢指针
/**
 * 设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步。
 * 如果单链表中存在环，则快慢指针会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var hasCycle3 = function (head){
    if (!head || !head.next) return false
    var fast = head.next.next
    var slow = head.next
    while(fast !== slow){
        if (!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
}

// 法四：哈希 map
var hasCycle4 = function (head) {
    let map = new WeakMap()
    if (!head || !head.next) return false
    while (head) {
        if (map.get(head)) {
            return true
        } else {
            map.set(head, false)
            head = head.next
        }
    }
    return false
} 
