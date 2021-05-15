/**
 * 找到两个单链表相交的起始结点
 * 
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。
 *          从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 * 
 * 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
 * 输出：Reference of the node with value = 2
 * 输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。
 *          从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 * 
 * 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
 * 输出：null
 * 输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
 *          由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
 * 解释：这两个链表不相交，因此返回 null。
 * 
 * 注意：
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */

// 法一：数组 
var intersectNode = function (head1, head2) {
    let temp = null
    let arr1 = transformToArray(head1)
    let arr2 = transformToArray(head2)
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i] !== -1)) {
            temp = arr1[i]
            return temp
        }
    }
    return temp
}

function transformToArray (head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr
}

// 法二
var intersectNode1 = function (head1, head2) {
    var temp = new WeakMap()
    while (head1) {
        map.set(head1, true)
        head1 = head1.next
    }
    while (head2) {
        var cur = map.get(head2)
        if (cur) {
            return head2
        }
    }
    return null
}

// 法三：双指针
/**
 * 解题思路：如果 A 链表 和 B 链表相交，则 A B 自相交点往后的链表是一致的
 * 
 * 解题步骤：
 *      1. 同步遍历 A、B 链表 pA、pB，直到遍历完其中一个链表（短链表）如上图，设 A 为长链表
 *      2. 那么此时 A、B 两表的长度差就是 pA 到链尾的长度，此时可以把 pB 指向长链表的表头 headA，继续同步遍历，直到遍历完长链表
 *      3. 此时，headA 到 PB 的长度就是两链表的长度差，pB 到链表的长度与 headB 到链尾的长度一致
 *      4. 此时，可将 pA 指向 headB，然后同步遍历 pB 及 pA，直到有相交节点，返回相交节点，否则返回 null
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var intersectNode2 = function (head1, head2) {
    let p1 = head1
    let p2 = head2
    while (p1 || p2) {
        if (p1 === p2) return p1
        p1 = p1 === null ? head2 : p1.next
        p2 = p2 === null ? head1 : p2.next
    }
    return null
}