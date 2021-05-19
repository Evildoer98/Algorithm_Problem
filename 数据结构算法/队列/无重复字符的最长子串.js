/**
 * 给定一个字符串，找出其中不含有重复字符的最长子串的长度
 * 
 * eg1：
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * eg2：
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * eg3：
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
var s1 = "abcabcbb"
var s2 = "bbbbb"
var s3 = "pwwkew"

// 维护数组
/**
 * 解题思路：使用一个数组来维护滑动窗口
 *  遍历字符串，判断字符是否在滑动窗口数组里
 *    1. 不在则 push 进数组
 *    2. 在 则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
 *    3. 然后将 max 更新为当前最长子串的长度
 *  遍历完，返回 max 即可
 * 
 * 时间复杂度：O(n^2)
 * 其中 arr.indexof() 时间复杂度为 O(n)
 *      arr.splice(0, index+1) 的时间复杂度也为 O(n)
 * 空间复杂度：O(n)
 */
var f1 = function (s) {
    let arr = [], max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        // 查询在 arr 数组中是否有 s[i]
        if (index !== -1) {
            // 有的话就
            arr.splice(0, index+1)
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max)
    }
    return max
}
console.log(f1(s1));

// 法二：维护下标
/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
var f2 = function (s) {
    let index = 0, max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        index = s.substring(i, j).indexOf(s[j])
        if (index !== -1) {
            i = i + index + 1
        }
        max = Math.max(max, j - i + 1)
    }
    return max
}
console.log(f2(s1));

// 法三：Map
/**
 * 使用 map 来存储当前已经遍历过的字符串，key 为字符，value 为下标
 * 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
 * 遍历字符串，判断当前字符是否已经在 map 中存在，
 * 存在则更新无重复子串开始下标 i 为相同的下一位置，
 * 此时从 i 到 j 为最新的无重复字符串。
 * 更新 max，将当前字符与下标放入 map 中
 * 最后返回 max 即可
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var f3 = function (s) {
    let map = new Map(), max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j])+1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
}
console.log(f3(s1));