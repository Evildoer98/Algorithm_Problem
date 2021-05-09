const twoSum = function(nums, target){
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 目标值与当前值的差值
        let k = target - nums[i]
        // has()返回一个bool值，用来表明map中是否存在指定元素
        if (map.has(k)) {
            // get()用来获取一个map对象中的指定的元素
            return [map.get(k), i]
        }
        // set()方法为map对象添加一个指定键(key)和值(value)的新元素
        map.set(nums[i], i)
    }
    return []
}