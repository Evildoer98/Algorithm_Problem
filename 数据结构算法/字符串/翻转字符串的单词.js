/**
 * 给定一个字符串，逐个反转字符串中的每个单词
 * 输入："the sky is bule"
 * 输出："bule is sky the"
 * 
 * 输入: "  hello world!  "
 * 输出: "world! hello"
 * 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 
 * 输入: "a good   example"
 * 输出: "example good a"
 * 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 * 
 * 说明：
 * 无空格字符构成一个单词。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 */
var s1 = "the sky is bule"
var s2 = "  hello world!  "
var s3 = "a good   example"
// 法一、正则 + JS API
var f1 = function(s){
    // trim() 删除空格
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}
console.log(f1(s1));
console.log(f1(s2));
console.log(f1(s3));
// 法二、双端队列
/**
 * 双端队列：两端都可以进队的队列
 * 
 * 思路：
 *  首先去除字符串左右空格
 *  逐个读取字符串中的每个单词，依次放入双端队列的队头
 *  再将队列转换成字符串输出（已空格为分隔符）
 */
var f2 = function(s){
    let left = 0
    let right = s.length - 1
    let queue = []
    let word = ''
    // charAt() 方法用于返回指定索引处的字符
    while (s.charAt(left) === ' ') {
        left++
        
    }
    // console.log(left);
    while (s.charAt(right) === ' ') {
        right--
    }
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
console.log(f2(s1));
console.log(f2(s2));
console.log(f2(s3));
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
console.log(f3(s1));
console.log(f3(s2));
console.log(f3(s3));
