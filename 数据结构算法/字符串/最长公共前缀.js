/**
 * 查找字符串数组中的最长公共前缀,如果不存在公共前缀，返回空字符串 ""
 * 
 * 输入：["flower","flow","flight"]
 * 输出：["fl"]
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀
 * 
 */

var strs1 = ["flower","flow","flight"]
var strs2 = ["dog","racecar","car"]

// 法一：逐个比较
/**
 * 时间复杂度 O(s) , s 是所有字符串中字符数量的总和
 * 空间复杂度 O(1)
 */
const f = function (strs) {
    if (strs === null || strs.length === 0) {
        return ""
    }
    let pre = strs[0]
    let len = strs.length
    for (let i = 1; i < len; i++) {
        let j = 0
        while (j < strs.length && j < pre.length) {
            if (strs[i].charAt(j) !== pre.charAt(j)) {
                break
            }
            j++
        }
        pre = pre.substring(0, j)
        if (pre === "") {
            return ""
        }
    }
    return pre
}

const f1 = function(strs){
    if (strs === null || strs.length === 0) {
        return ""
    }
    let pre = strs[0]
    for (let i = 1; i < strs.length; i++) {  
        for (var j = 0; j < strs.length && j < pre.length; j++) {
            if (strs[i].charAt(j) !== pre.charAt(j)) {
                break
            }
        }
        pre = pre.substring(0, j)
        if (pre === "") {
            return ""
        }
    }
    return pre
}
console.log(f(strs1));
console.log(f(strs2));

console.log(f1(strs1));
console.log(f1(strs2));


// 法二：仅需最大和最小字符串的最长公共前缀
const f2 = function (strs) {
    let len = strs.length
    if (strs === null || len === 0) {
        return ""
    }
    if (len === 1) {
        return strs[0]
    }
    let min = 0
    let max = 0
    for (let i = 0; i < len; i++) {
        if (strs[min] > strs[i]) {
            min = i
        }
        if (strs[max] < strs[i]) {
            max = i
        }
    }
    for (let j = 0; j < strs[min].length; j++) {
        // charAt() 方法可返回指定位置的字符。
        if (strs[min].charAt(j) !== strs[max].charAt(j)) {
            return strs[min].substring(0, j)
        } 
    }
    return strs[min]
}

const f3 = function(strs){
    if (strs.length === 0) {
        return ''
    }
    if (strs.length === 1) {
        return strs[0]
    }
    // 使用sort是按照ASCII码表一个一个的排序出来的字符串数组，所以前面的几乎都一样了
    strs = strs.sort()
    // console.log(strs);
    let result = ''
    let start = strs[0]
    let end = strs[strs.length - 1]
    for (let i = 0; i < start.length; i++) {
        if (start[i] === end[i]) {
        //    排序后，比较首尾位置的字符串即可
        //    相同的字符直接放进result
            result += start[i]
        }else {
        //    退出循环
            break
        }
    }
    return result
}

console.log(f2(strs1));
console.log(f2(strs2));

console.log(f3(strs1));
console.log(f3(strs2));

// 法三：分治策略，归并思想
/**
 * 分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，
 * 再把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，
 * 则原问题的解则是子问题解的合并
 * 
 * 问题：多个字符串的最长公共前缀
 * 分解成多个相似的子问题：求两个字符串的最长公共前缀
 * 原问题的解为子问题的合并：多个字符串的最长公共前缀为两两字符串的最长公共前缀的最长公共前缀，
 * 我们可以归并比较两最长公共前缀字符串的最长公共前缀，直到最后归并比较成一个，则为字符串数组的最长公共前缀
 * 
 * LCP(S1, S2, ... ,Sn) = LCP(LCP(S1, Sk), LCP(Sk+1, Sn))
 * 
 */

const f4 = function (strs) {
    if (strs === null || strs.length === 0) {
        return ""
    }
    return LCP(strs)
}
/**
 * 若分裂后的两个数组长度不为 1，则继续分裂
 * 直到分裂后的数组长度都为 1
 * 然后比较获取最长公共前缀
 */
function LCP (strs) {
    let len = strs.length
    if (len === 1) {
        return strs[0]
    }
    let mid = Math.floor(len / 2)
    let left = strs.slice(0, mid)
    let right = strs.slice(mid, length - 1)
    return LCPfixTwo(LCP(left), LCP(right))
}
function LCPfixTwo (str1, str2) {
    let i = 0
    while (i < str1.length && i < str2.length) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            break
        }
        i++
    }
    return str1.substring(0, i)
}
console.log(f4(strs1));
console.log(f4(strs2));

// 法四：trie树（字典树）
/**
 * 构建一颗树，字符串数组的最长公共序列就为从根节点开始遍历树，直到：
 *  遍历节点存在超过一个子节点的节点
 *  或者遍历节点一个字符串的结束字符
 * 为止，走过的字符为字符串数组的最长公共前缀
 *                  f
 *                 /
 *                l
 *               /\
 *              o  i
 *             /    \
 *            w      g
 *           /        \
 *          e          t
 *         /
 *        r
 * 
 * 取最长公共位置 fl
 */

const f5 = function (strs) {
    let len = strs.length
    if (strs === null || len === 0) {
        return ""
    }
    // 初始化 Trie 树
    let trie = new Trie()
    // 构建 Trie 树
    for (let i = 0; i < len; i++) {
        if (!trie.insert(strs[i])) {
            return ""
        }
    }
    // 返回最长公共前缀
    return trie.searchLongTrie()
}
var Trie = function () {
    this.root = new TrieNode()
}
var TrieNode = function () {
    // next 放入当前节点的子节点
    this.next = {}
    // 当前是否是结束节点
    this.isEnd = false
}

Trie.prototype.insert = function (word) {
    if (!word) {
        return false
    }
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        if (!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode()
        }
        node = node.next[word[i]]
    }
    node.isEnd = true
    return true
}

Trie.prototype.searchLongTrie = function () {
    let node = this.root
    let prevs = ''
    while(node.next) {
        let keys = Object.keys(node.next)
        if (keys.length !== 1) {
            break
        }
        if (node.next[keys[0].isEnd]) {
            prevs += keys[0]
            break
        }
        prevs += keys[0]
        node = node.next[keys[0]]
    }
    return prevs
}
