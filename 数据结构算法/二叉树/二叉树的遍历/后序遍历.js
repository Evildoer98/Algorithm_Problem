/**
 * 
 * 后序遍历
 *  1. 先访问左节点
 *  2. 在访问右结点
 *  3. 最后访问根节点
 * 
 */
/**
 * 给定一个二叉树，返回它的后序遍历
 * eg：
 *  输入：[1, null, 2, 3]
 *      1
 *       \
 *        2
 *       /
 *      3
 *  输出：[3, 2, 1]
 */
const postOrderTraversal = function (root) {
    let list = []
    let inOrder = function (node) {
        if (!node) {
            inOrder(node.left)
            inOrder(node.right)
            list.push(node.val)
        }
    }
    inOrder(root)
    return list
}

const postOrderTraversalUnRecur = function (root) {
    let list = []
    if (root !== undefined) {
        let s1 = []
        let s2 = []
        s1.push(root)
        while (s1.length !== 0) {
            head = s1.pop()
            s2.push(head)
            if (head.left !== undefined) {
                s1.push(head.left)
            }
            if (head.right !== undefined) {
                s1.push(head.right)
            }
        }
        while (s2.length !== 0) {
            var item = s2.pop()
            list.push(item.val)
        }
    }
    return list
}