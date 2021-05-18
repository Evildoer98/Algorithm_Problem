/**
 * 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效
 * 有效字符串需要满足：
 *      1. 左括号必须用相同类型的右括号闭合
 *      2. 左括号必须以正确的顺序闭合
 * 注意：空字符串可被认为是有效字符串
 * 
 * eg1：
 * 输入："()"
 * 输出: true
 * 
 * eg2:
 * 输入: "()[]{}"
 * 输出: true
 * 
 * eg3:
 * 输入: "(]"
 * 输出: false
 * 
 * eg4:
 * 输入: "([)]"
 * 输出: false
 * 
 * eg5:
 * 输入: "{[]}"
 * 输出: true
 * 
 */

var s1 = "()"
var s2 = "()[]{}"
var s3 = "(]"
var s4 = "([)]"
var s5 = "{[]}"
// 法一
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var f1 = function (s) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (s[i] !== map[stack.pop()]) {
            return false
        }
    }
    return true
}

console.log(f1(s1));
console.log(f1(s2));
console.log(f1(s3));
console.log(f1(s4));
console.log(f1(s5));