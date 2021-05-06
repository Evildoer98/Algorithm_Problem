/**
 * 
 * [[1,2,3],[3,4,5,6],[6,7,8,9,[11,12,[12,13,[14]]]]]
 * 数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组
 * 
 */

/**
 *  
 * Array.prototype.flat() 特性总结
 *  1. Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组，对原数组没有影响
 *  2. 不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数
 *  3. 传入 <= 0 的整数将返回原数组，不“拉平”
 *  4. Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
 *  5. 如果原数组有空位，Array.prototype.flat() 会跳过空位 
 * 
 *  实现思路：
 *  1. 遍历数组的每一个元素
 *  2. 判断元素是否为数组
 *  3. 将数组的元素展开一层
 * 
 *  ES5 大多数数组方法对空位的处理都会选择跳过空位包括：forEach(), filter(), reduce(), every() 和 some() 都会跳过空位
 * 
 */

// 扁平化
const flattenDeep = (array) => array.flat(Infinity)
// 去重
const unique = (array) => Array.from(new Set(array))
// 排序
const sort = (array) => array.sort((a, b) => a - b)
// 函数组合
const compose = (...fns) => (initValue) => fns.reduceRight((y, fn) => fn(y), initValue)
// 组合后函数
const flatten_unique_sort = compose(sort, unique, flattenDeep)
// 测试
var arr = [[1,2,3],[3,4,5,6],[6,7,8,9,[11,12,[12,13,[14]]]]]
console.log(flatten_unique_sort(arr))

// 法一：递归
const flag = function (arr) {
    const newArr = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            newArr.push(...flag(item))
        } else {
            newArr.push(item)
        }
    })
    return newArr
}

// 法二：
const flag2 = function (arr) {
    return arr.reduce((res, item) => {
        res = res.concat(Array.isArray(item) ? flag2(item) : item)
        return res
    }, [])
}

const flag3 = function (arr) {
    return num > 0 ? arr.reduce((pre, cur) => 
        pre.concat(Array.isArray(cur) ? flag3(cur, num - 1) : cur), [])
        : arr.slice()
}
console.log(flag(arr));
console.log(flag2(arr));
