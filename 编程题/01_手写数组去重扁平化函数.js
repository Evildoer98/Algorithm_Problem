// 数组去重
var uniqe = function (arr) {
    return [new Set(...arr)]
}
var uniqe = function (arr) {
    return arr.reduce((pre, cur) => {
        if (!pre.includes(cur)) {
            pre.push(cur)
        }
        return pre
    }, []);
}





// 数组扁平化
var flat = function (arr) {
    const res = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...flat(item))
        } else {
            res.push(item)
        }
    });
    return res
}
var arr = [1, 2, [23, 3,4, [5, 6, 7]]]
console.log(flat(arr));