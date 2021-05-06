/**
 * 查找字符串数组中的最长公共前缀
 * 输入：["flower","flow","flight"]
 * 输出：["fl"]
 */
// 法一：逐个比较
const f1 = function(strs){
    if (strs === null || strs.length === 0) {
        return ""
    }
    let pre = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < strs.length && j < pre.length; j++) {
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

// 法二：仅需最大和最小字符串的最长公共前缀
const f2 = function(strs){
    if (strs.length === 0) {
        return ''
    }
    if (strs.length === 1) {
        return strs[0]
    }
    // 使用sort是按照ASCII码表一个一个的排序出来的字符串数组，所以前面的几乎都一样了
    strs = strs.sort()
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

var strs = ["flower","flow","flight"]
console.log(f1(strs));
console.log(f2(strs));
