/**
 * 打乱一个没有重复元素的数组
 */

/**
 * 浅拷贝数组，利用 random() 方法重置数组下标
 */

var Solution = function (nums) {
    this.nums = nums
}

Solution.prototype.reset = function () {
    return this.nums
}

Solution.prototype.shuffle = function () {
    let num = this.nums.slice()
    for (let i = 0; i < nums.length; i++) {
        let index = Math.floor((i + 1) * Math.random())
        [num[index], num[i]] = [num[i], num[index]]
    }
    return num
}

