/**
 * 给定一个字符串 s，找出 s 中最长的回文子串。
 * 
 * eg1：
 *  输入: "babad"
 *  输出: "bab"
 *  注意: "aba" 也是一个有效答案
 * 
 * eg2：
 *  输入: "cbbd"
 *  输出: "bb"
 */
var s1 = "babad"
var s2 = "cbbd"
var s3 = "abccddeeddccba"
var f = function (str) {
    if(!str.length) return ''
    let res = str[0]
    const setRes = (j, k) => {
        if(str[j] !== str[k]) return
        while (str[j]&&str[j] === str[k]&&str[k]) {
            res = res.length >= j - k + 1 ? res : str.slice(k, j + 1)
            j++
            k--
        }
    }
    for (let i = 1, len = str.length; i < len; i++){
        setRes(i,i-1)
        setRes(i,i-2)
    }
    return res
}

console.log(f(s1))
console.log(f(s2))
console.log(f(s3))