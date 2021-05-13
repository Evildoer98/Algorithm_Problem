/**
 * 反转链表
 * 
 * 输入：1->2->3->4->5->NULL
 * 输出：5->4->3->2->1->NULL
 * 
 * 进阶：迭代或者递归
 */
// 法一
/**
 * 先遍历到尾部
 * 在遍历的过程中让节点新增属性 pre 使单向链表变成双向链表
 * 遍历到尾部时开始指向反转并删除节点的 pre 属性
 * 
 * 边界条件：
 *  在头部时，节点的 pre 属性为 null
 *  到尾部时，节点的 next 属性为 null
 */
var f1 = function (head) {
    if (head.next === null) {
        return head
    }
    let preNode = head
    let curNode = head.next
    // 链表反向后原来的有就变成了尾巴
    // 相当于 head.pre = null
    let preNode = null
    while (curNode.next) {
        // 建立反向联系
        curNode.pre = preNode
        // 指针后移
        preNode = curNode
        curNode = curNode.next
    }
    // 建立最后一个元素和倒数第二个元素的联系
    curNode.pre = preNode

    // 一个双向链表完成
    // 开始向前遍历
    while (curNode.pre) {
        // 指向反向
        curNode.next = curNode.pre
        // 使"先指针"和"后指针"都指向当前对象
        preNode = curNode
        // "先指针"前移
        curNode = curNode.pre
        // 将初始从前向后遍历时的属性删除
        delete preNode.pre
    }
    // 修正原链表第一个元素的指向
    curNode.next = curNode.pre
    delete curNode.pre
}

// 法二：递归
/**
 * 每次只对一个元素进行操作，如果当前元素的后一项不为空，则递归调用笨函数，传入的值为当前元素的后一项
 * 在每次递归形成的作用域中使后面的元素指向当前元素，当前元素指向空
 * 
 * 边界条件：
 *  当传入参数的属性 next 为 null 时，说明这个元素是链表的最后一个元素
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var reverseList2 = function (node) {
    if (node.next === null) {
        /**
         * 进入此条件有两种情况
         *    1. 链表只有一个元素
         *    2. 链表不止一个元素，但是已经遍历到链表的最后一个元素了
         */
        return node
    } else {
        let nextNode = reverseList2(node.next)
        nextNode.next = node
        // 如果不是原链表的第一个元素，则会在上一次递归的作用域中被修改
        node.next = null
        return node
    }
}

// 法三：迭代
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var reverseList3 = function (head) {
    if (!head || !head.next) return head
    var preNode = null
    var curNode = head
    while (curNode) {
        // 用于临时存储 curNode 后继节点
        var next = curNode.next
        // 反转 curNode 的后继节点
        curNode.next = preNode
        // 变更 preNode、curNode
        // 待反转节点指向下一个节点
        preNode = curNode
        curNode = next
    }
    head = preNode
    return head
}

// 法四：尾递归法
/**
 * 从头节点开始，递归反转它的每一个节点，直到 null 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var reverseList4 = function (head) {
    if (!head || !head.next) {
        return head
    }
    head = reverse(null, head)
    return head
}
var reverse = function (preNode, curNode) {
    if (!curNode) {
        return preNode
    }
    var next = curNode.next
    curNode.next = preNode
    return reverse(curNode, next)
}
// 测试
function CreateNode(val){
    this.val = val;
    this.next = null;
}

function CreateList(...nodes){
    this.head = nodes[0];
    this.length = nodes.length;
    for( var i = 0; i < nodes.length - 1; i++ ){
        if( nodes[i+1] ){
            nodes[i].next = nodes[i+1];
        }
    }
}

function reverseList(head){
    // 选择上面所示的任意一个翻转链表的函数
}

const node1 = new CreateNode(1);
const node2 = new CreateNode(2);
const node3 = new CreateNode(3);
const node4 = new CreateNode(4);
const node5 = new CreateNode(5);
const list = new CreateList(node1, node2, node3, node4, node5);
console.log(node1);
reverseList(node1);
console.log(node5);