var f = function (str) {
    var arr = str.split('')
    let len = arr.length
    let temp = []
    let res = 0
    for (let i = 0; i < len; i++) {
        if (arr[i] >= 0 && arr[i] <= 9) {
            temp.push(arr[i])
            // console.log(temp);
        } else {
            temp = []
        }
        if (temp[0] == 0) {
            temp.shift()
        }
        let x = temp.join('')
        // console.log(x);
        res = Math.max(x,res)
    }
    return res
}
var s = 'helloworld520helloworld1314'
console.log(f(s));
