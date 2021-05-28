
// 给定一个包括  n 个整数的数组  nums  和 一个目标值  target。找出  nums  中的 任意个数之和 等于 target，并打印出所有结果的索引,同一个结果索引不能重复。

// 例如： nums = [1,5,8,17,29,33,39,11,16] ,target = 33
// 结果1：5 ，结果2：3,8,...


const twoSum = function(nums, target){
    let map = new Map()
    let res = []
    if (nums.length <= 0) {
        return []
    }
    if (nums.indexOf(target)) {
        res.push(nums.indexOf(target))
    }
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i]
        if (map.has(k)) {
            res.push([map.get(k), i])
        }
        map.set(nums[i], i)
    }
    return res
}
// console.log(twoSum(nums, target))  // 5 , [3, 8] [] [1,5,11,16]
var nums = [1,5,8,17,29,33,39,11,16,27] , target = 33
// 循环从第一位依次累加，个数依次增加，利用双数之和为基础
var f = function (nums, target) {
    let len = nums.length
    let k = target
    let res = []
    let temp = []
    let allres = []
    let arr2 = []
    if (len <= 0) {
        return []
    }
    if (nums.indexOf(target)) {
        allres.push(nums.indexOf(target))
    }
    for (let i = 0; i < len; i++) {
        if (fun(nums, k)) {
            for (let j = 0; j < i; j++) {
                temp.push(j)
                // console.log(temp);
            }
            arr = fun(nums, k, i)
            res.push([arr, temp])   
            temp = []
        }
        k = k - nums[i]
    }
    for (let i = 0; i < res.length; i++) {
        if (res[i][0].length > 0) {
            arr2 = flag(res[i])
            allres.push(arr2)
        }
    }
    // console.log(allres);
    return allres
}

// 利用双数之和
var fun = function (nums, x, y) {
    let map = new Map()
    let res = []
    // console.log(k)
    for (let i = y; i < nums.length; i++) {
        let k = x - nums[i]
        // console.log(k)
        if (map.has(k)) {
            res.push([map.get(k), i])
            // console.log(res)
        }
        map.set(nums[i], i)
    }
    return res
}
// 数组扁平化
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
// 若在增加一个数 27，则结果
console.log(f(nums, target)); // 5, [3, 8],[1, 9, 0], [7, 8, 0, 1]