/**
 * 
 * 前序遍历：
 *  1. 遍历左子树
 *  2. 访问根节点
 *  3. 遍历其右子树
 * 
 */

/**
 * 给定一个二叉树，返回它的前序遍历
 * 示例：[1, null, 2, 3]
 *       1 
 *         \
 *          2
 *         /
 *        3
 * 输出 [1, 3, 2]
 */
// 法一：递归
var inOrderTraverse  = function (root) {
    var list = []
    let inOrder = function (node) {
        if (node !== null) {
            inOrder(node.left)
            list.push(node.val)
            inOrder(node.right)
        }
    }
    inOrder(root)
    return list
}

// 法二：非递归（迭代）
const inOrderTraverseUnRecur  = function (root) {
    var list = []
    let stack = []
    let node = root
    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        list.push(node.val)
        node = node.right
    }
    return list
}