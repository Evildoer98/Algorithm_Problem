/**
 * 删除字符串中出现次数 >= 2 次的相邻字符
 * 输入：'abbbaca'
 * 输出：'ca'
 * 解释：'abbbaca' => 'aaca' => "ca"
 */

var s = 'abbbaca'
var f1 = function (s) {
   let stack = []
   let top, next, i = 0
   while (i < s.length) {
       top = stack[stack.length - 1]
       next = s[i]
       if (next === top) {
           stack.pop()
        //    console.log(stack);
           while (s[i] === top) {
               i += 1
           }
       } else {
           stack.push(next)
           console.log(stack);
           i += 1
       }
   }
   return stack.join('')
}
console.log(f1(s));