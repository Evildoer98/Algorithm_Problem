/**
 * 一个二叉树，返回按 层序遍历得到的节点值（即逐层，从左到右访问所有节点）
 * eg1：
 *  二叉树：[3, 9, 20, null, null, 15, 7]
 *         3
 *        /  \
 *       9   20
 *           / \
 *          15  7
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [9, 20],
 *   [15, 7]
 * ]
 * 
 */
// 法一：广度优先遍历
/**
 * 将树按层级来一层一层遍历的，每一层遍历的顺序都是从左往右。
 * 因为广度优先是要按顺序排序的，所以与队列的特性是相似的，即先进先出，所以一般使用队列来实现广度遍历优先。
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let queue = [root]
    while (queue.length) {
        let cur = []
        let temp = []
        while (queue.length) {
            let node = queue.shift()
            cur.push(node.val)
            if (node.left) {
                temp.push(node.left)
            }
            if (node.right) {
                temp.push(node.right)
            }
        }
        res.push(cur)
        queue = temp
    }
    return res
}

// 法二：深度优先遍历
var levelOrder = function (root) {
    const res = []
    var dep = function (node, depth) {
        if (!node) {
            return
        }
        res[depth] = res[depth] || []
        res[depth].push(node.val)
        dep(node.left, depth + 1)
        dep(node.right, depth + 1)
    }
    dep(root, 0)
    return res
}