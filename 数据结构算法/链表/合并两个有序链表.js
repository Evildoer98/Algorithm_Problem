/**
 * 
 * 将两个升序链表合并成为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
 * 
 * 输入：1->2->4; 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 */

// 法一
/**
 * L1 和 L2 是有序递增的，比较 l1.val 和 l2.val 的较小值就是合并后链表的最小值
 * 次小值就是小节点的 next.val 与大节点的 val 比较的较小值，依次递归，直到递归到 l1 和 l2 均为 null
 */
var merageTwoLists = function(l1, l2){
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    if (l1.val <= l2.val) {
        l1.next = merageTwoLists(l1.next, l2)
        return l1
    }
    if (l1.var >= l2.val) {
        l2.next = merageTwoLists(l2.next, l1)
        return l2
    }
}

// 法二
var merageTwoLists1 = function (l1, l2) {
    let res = new List()
    while (l1 !== null && l2 !== null) {
        if (l1.element < l2.element) {
            res.append(l1.element)
            l1 = l1.next
        } else {
            res.append(l2.element)
            l2 = l2.next
        }
    }
    let temp = !l1 ? l2 : l1
    while (temp) {
        res.append(temp.element)
        temp = temp.next
    }
    return res
}
