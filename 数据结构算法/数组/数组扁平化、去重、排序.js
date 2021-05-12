/**
 * 
 * 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * 
 */

// 法一：调用 api

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
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log(flatten_unique_sort(arr));

// 法二：通过 array.some() + concat 来实现 flat()
const f2 = function (arr) {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    arr = [...new Set(arr)].sort((a, b) => a - b)
    return arr
}
console.log(f2(arr));

// 法三：分别实现 数组扁平化、数组去重、数组排序
// 数组扁平化
const myflat = function (arr) {
    return arr.reduce((res, item) => {
        return res.concat(Array.isArray(item) ? myflat(item) : item)
    },[])
}
const myflat2 = function (arr) {
    const res = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...myflat2(item))
        } else {
            res.push(item)
        }
    })
    return res
}

// 数组去重
const unique1 = function (arr) {
    return arr.reduce((res, cur) => {
        if (!res.includes(cur)) {
            res.push(cur)
        }
        return res
    }, [])
}
const unique2 = function (arr) {
    return arr.reduce((cur, next) => cur.indexOf(next) !== -1 ? cur : [...cur, next], [])
}
const unique3 = function (arr) {
    var obj = {}
    return arr.reduce((cur, next) => obj[next] ? cur : obj[next] = true && [...cur, next], [])
}
const unique4 = function (arr) {
    return [...new Set(arr)]
}


// 数组排序
// 冒泡排序
const bubbleSort = function (arr) {
    const len = arr.length
    // 外层循环i控制比较的轮数
    for (let i = 0; i < len; i++) {
      // 里层循环控制每一轮比较的次数j，arr[i] 只用跟其余的len - i个元素比较
      for (let j = 1; j < len - i; j++) {
        // 若前一个元素"大于"后一个元素，则两者交换位置
        if (arr[j - 1] > arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
      }
    }
    return arr
}
// 快速排序
/**
 * 快排的原理是基于二分法
 * 思想：
 *    通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一个部分的所有数据都要小，
 *    然后再按照此方法对两个部分数据进行快速排序，整个排序过程使用递归进行，以此达到整个数据变成有序序列
 */
 var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    var mark = Math.floor(arr.length / 2)
    // 取出该数，在原数组中删除这个数，防止在排序的时候出现重复
    var middle = arr.splice(mark, 1)[0]
    var right = []
    var left = []
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([middle], quickSort(right))
}
// 测试
const list = [1, [2, 3, 8], [3, 6, 4], [5, [6, 7, [8, 1, 2]]]]
// 扁平化测试
list1 = myflat(list)
list2 = myflat2(list)
console.log(list1);
console.log(list2);
// 去重测试
list3 = unique1(list1)
list4 = unique2(list1)
list5 = unique3(list1)
list6 = unique4(list1)
console.log(list3);
console.log(list4);
console.log(list5);
console.log(list6);
// 排序测试
list7 = bubbleSort(list3)
list8 = quickSort(list4)
console.log(list7);
console.log(list8);

