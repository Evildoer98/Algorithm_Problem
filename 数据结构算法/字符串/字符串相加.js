/**
 * 给定两个字符串形式的非负整数 num1 和 num2，计算他们的和
 * eg：
 *  “111” + “2222” = “2333”
 * 
 * 注意：
 *  num1 和 num2 的长度都小于 5100
 *  num1 和 num2 都只包含数字 0-9
 *  num1 和 num2 都不包含任何前导零
 *  不能使用任何内建的 BigInteger，也不能直接将输入的字符串转换为整数形式
 */
var num1 = "111"
var num2 = "2222"

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
    let res = sum1 + sum2
    return res.toString()
}
console.log(f1(num1, num2));
