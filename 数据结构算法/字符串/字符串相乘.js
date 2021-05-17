/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，他们的乘积也表示为字符串形式
 * 
 * 输入：num1 = "2", num2 = "3"
 * 输出："6"
 * 
 * 输入：num1 = "123", num2 = "456"
 * 输出："56088"
 * 
 * 说明：
 *  num1 和 num2 的长度小于 110
 *  num1 和 num2 只包含数字 0-9
 *  num1 和 num2 均不以零开头，除非是数字 0 本身
 *  不能使用任何标准库的大数类型（比如：BigInteger）或直接将输入转换为整数来处理
 * 
 */
var num1 = "2", num2 = "3"
var num3 = "123", num4 = "456"
const f1 = function (num1, num2) {
    let arr1 = num1.split("")
    let arr2 = num2.split("")
    let len1 = arr1.length-1
    let len2 = arr2.length-1
    let sum1 = 0
    let sum2 = 0
    let i = 1
    let j = 1
    while (len1 >= 0) {
        sum1 += arr1[len1] * i
        i = i * 10
        len1--
    }
    while (len2 >= 0) {
        sum2 += arr2[len2] * j
        j = j * 10
        len2--
    }
    let res = sum1 * sum2
    return res.toString()
}
console.log(f1(num1, num2));
console.log(f1(num3, num4));

// 法二:竖式相乘
/**
 * 两个数 M 和 N 相乘的结果可以由 M 乘上 N 的每一位数的和得到
 */

const f2 = function (num1, num2) {
    if (num1 === '' || num2 === '0') {
        return "0"
    }
    let res = []
    for (let i = 0; i < num1.length; i++) {
        let temp1 = +num1[num1.length - 1]
        for (let j = 0; j < num2.length; j++) {
            let temp2 = +num2[num2.length - 1]
            let pos = res[i+j] ? res[i+j] + temp1 * temp2 : temp1 * temp2
            res[i+j] = pos % 10
            pos >= 10 && (res[i+j+1] = res[i+j+1] ? res[i+j+1] + Math.floor(pos/10) : Math.floor(pos/10))
        }
    }
    return res.reverse().join("")
}

console.log(f2(num1, num2));
console.log(f2(num3, num4));