/**
 * 判断输入的是不是回文字符串
 */

var str1 = "abcde"
var str2 = "abccba"
var str3 = "abcba"

// 双指针

const f1 = function (str) {
    let arr = str.split("")
    let right = 0
    let left = arr.length - 1
    while (right < left) {
        if (arr[right] !== arr[left]) {
            return false
        }
        left--
        right++
    }
    return true
}
console.log(f1(str1));
console.log(f1(str2));
console.log(f1(str3));
// 也可以使用 charAt() 比较，就可以不用转化成数组
const f2 = function (str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false
        }
        left++
        right--
    } 
    return true
}
console.log(f2(str1));
console.log(f2(str2));
console.log(f2(str3));

