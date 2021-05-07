/**
 * 打乱一个没有重复元素的数组
 */

/**
 * 浅拷贝数组，利用 random() 方法重置数组下标
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
// 保存原数组
var Solution = function (nums) {
    this.nums = nums
}
// 重置原数组
Solution.prototype.reset = function () {
    return this.nums
}
// 打乱数组
Solution.prototype.shuffle = function () {
    let num = this.nums.slice()
    for (let i = 0; i < nums.length; i++) {
        let index = Math.floor((i + 1) * Math.random())
        [num[index], num[i]] = [num[i], num[index]]
    }
    return num
}

// 法二
function solution1 (arr) {
    let tempArr = arr.slice()
    for (let i = 0; i < tempArr.length; i++) {
        let mark = Math.floor(Math.random() * (tempArr.length - i) + i)
        let temp = tempArr[i]
        tempArr = tempArr[mark]
        tempArr[mark] = temp
    }
    return tempArr
}

/**
 * sort(() => Math.random() - 0.5)
 * 
 * sort() 会根据 compareFunction(a, b) 的返回值，来决定 a 和 b 的相对位置
 * 如果 compareFunction(a, b) 小于 0，那么 a 会被排列到 b 之前
 * 如果 compareFunction(a, b) 大于 0，那么 a 会被排列到 a 之前
 * 如果 compareFunction(a, b) 等于 0，那么 a 和 b 的相对位置不变
 * 
 * 真正的乱排序
 * 最后一位开始向前遍历，每次循环生成随机数
 * Math.random() * (i+1)，向下取整，然后两个位置元素交换
 * 
 */

