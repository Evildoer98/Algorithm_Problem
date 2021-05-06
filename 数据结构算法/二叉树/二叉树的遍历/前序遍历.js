/**
 * 
 * 前序遍历：
 *  1. 访问根节点
 *  2. 遍历其左子树
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
 * 输出 [1, 2, 3]
 */

/**
 * 
 * 迭代实现：
 * 利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程
 *  1. 首先根入栈
 *  2. 将根节点出栈，将根节点值放入结果数组中
 *  3. 然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树，然后左子树入栈
 *  4. 继续出栈（左子树被出栈）
 * 
 * 空间复杂度 O(n)
 * 时间复杂度 O(n)
 * 
 */
const preOrderTraversal = (root) => {
    const list = []
    const stack = []
    // 根节点不为空的时候，将根节点入栈
    if (root) {
        stack.push(root)
    }
    while (stack.length > 0) {
        const curNode = stack.pop()
        // 第一步的时候，先访问的是根节点
        list.push(curNode.val)
        // 先打印左子树，然后右子树
        // 所以先加入栈的是右子树，然后左子树
        if (curNode.right !== null) {
            stack.push(curNode.right)
        }
        if (curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
}

// 先访问根节点，再访问左节点，最后访问右节点。
const preOrderTraverse = (root) => {
    let list = []
    const preOrder = (node) => {
        if (node !== null) {
            // 先访问根节点
            list.push(node.val)
            // 再访问左节点
            preOrder(node.left)
            // 最后访问右结点
            preOrder(node.right)
        }
    }
    preOrder(root)
    return list
}
 
// 非递归
const preOrderTraverseUnRecur = (root) => {
    let list = []
    let stack = [root]
    while (stack.length !== 0) {
        const curNode = stack.pop()
        const left = curNode.left
        const right = curNode.right
        // 第一步的时候，先访问的是根节点
        list.push(curNode.val)
        if (right) {
            stack.push(right)
        }
        // 因为 pop 是取出最后一个元素，所有我们要确保首先拿到的左节点
        if (left) {
            stack.push(left)
        }
    }
}