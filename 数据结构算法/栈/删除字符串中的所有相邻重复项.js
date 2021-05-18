/**
 * 给出由小写字母组成的字符串 s，重复项删除操作 会选择两个相邻且相同的字母，并删除它们
 * 在 s 上反复执行重复项删除操作，直到无法继续删除
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一
 * 
 * eg：
 * 输入：“abbaca”
 * 输出：“ca”
 * 解释：在“abbaca”中，可以删除“bb” 由于两字母相邻且相同，这是此时唯一可以执行删除的重复项，之后得到字符串“aaca”，其中又只有“aa” 可以执行重复项删除操作，所以最后的字符串为“ca”
 * 
 * 提示：
 *  1. 0 <= s.length <= 20000
 *  2. s 仅由小写英文字母组成
 */

var s = "abbaca"

// 法一：
/**
 * 使用栈，进栈之前跟栈顶比较，如果不同则进栈，如果相同则栈顶元素出栈
 */
var f1 = function (s) {
    let stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (s[i] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
}
console.log(f1(s));

// 法二（另外一种写法，思路一样）
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var f2 = function (s) {
    let stack = []
    for (const c of s) {
        let pre = stack.pop()
        if (pre !== c) {
            stack.push(pre)
            stack.push(c)
        }
    }
    return stack.join('')
}
console.log(f2(s));