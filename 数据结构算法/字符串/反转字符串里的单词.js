/**
 * 给定一个字符串，逐个反转字符串中的每个单词
 * 输入："the sky is bule"
 * 输出："bule is sky the"
 */
// 法一、正则 + JS API
var f1 = function(s){
    // trim() 删除空格
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}

// 法二、双端队列
var f2 = function(s){
    let left = 0
    let right = s.length - 1
    let queue = []
    let word = ''
    // charAt() 方法用于返回指定索引处的字符
    // while (s.charAt(left) === ' ') {
    //     left++
        
    // }
    // console.log(left);
    // while (s.charAt(right) === ' ') {
    //     right--
    // }
    // console.log(right);
    while (left <= right) {
        let char = s.charAt(left)
        if (char === ' ' && word) {
            queue.unshift(word)
            word = ''
        }else if (char !== ' ') {
            word += char
        }
        left++
    }
    // unshift()向queue的开头添加word
    queue.unshift(word)
    // join()用于把数组中的所有元素放入一个字符串。
    // 元素是通过指定的分隔符进行分隔的。
    return queue.join(' ')
}

// 法三、手动反转
var f3 = function(s){
    // filter(Boolean) 移除空格
    const strArr = s.split(' ').filter(Boolean)
    // console.log(strArr);
    const newArr = []
    let len = strArr.length
    while(len-- > 0){
        newArr.push(strArr[len])
    }
    return newArr.join(' ')
}
var s = "the sky is bule"
// console.log(f1(s));
console.log(f2(s));
console.log(f3(s));
