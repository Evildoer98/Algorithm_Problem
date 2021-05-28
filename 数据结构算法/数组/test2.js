// 2. 给定一组开始、结束时间的数组，找出数组中的交叉时间段及空余时间段
// [
// [2020-03-20,2020-03-22],
// [2020-05-20,2020-07-22],
// [2020-04-20,2020-05-22],
// [2020-08-20,2020-09-22],
// ]
// 空余时间段：2020-03 ~ 23-2020-04-19，2020-07-23 ~ 2020-08-19，...
// 交叉时间段：2020-05-20 ~ 2020-05-22，...

var nums = [
    ['2020-03-20','2020-03-22'],
    ['2020-05-20','2020-07-22'],
    ['2020-04-20','2020-05-22'],
    ['2020-08-20','2020-09-22']
]
// 获取开始时间数组
var begin = function (nums) {
    let start = []
    nums.forEach(element => {
        start.push(element[0])
    });
    return start
}
// 获取结束时间数组
var end = function (nums) {
    let end = []
    nums.forEach(element => {
        end.push(element[1])
    });
    return end
}
// console.log(begin(nums));
// console.log(end(nums));
var a = begin(nums).sort()
var b = end(nums).sort()
// console.log('-----------------------');
// console.log('开始时间' + a.sort());
// console.log('结束时间' + b.sort());
// 求交集
var intersection = function (a, b) {
    let len = a.length
    let res = []
    for (let i = 0; i < len; i++) {
        if (b[i] > a[i+1]) {
            res.push([a[i+1], b[i]])
        }
    }
    return res 
}
var inter = intersection(a, b)
// console.log(inter);

// 求差集
var difference = function (a, b) {
    let len = a.length
    let res = []
    for (let i = 0; i < len; i++) {
        if (b[i] < a[i+1]) {
            res.push([b[i], a[i+1]])
        }
    }
    return res
}

var diff = difference(a, b)
// console.log(diff);

// 日期加一
var add = function (arr) {
    let len = arr.length
    let x = []
    for (let i = 0; i < len; i++) {
        // console.log(arr[i][0]);
        x.push(arr[i][0].split("-"))
    }
    for (let j = 0; j < len; j++) {
        x[j][2] = (+x[j][2] + 1).toString()
    }
    for (let k = 0; k < len; k++) {
        arr[k][0] = x[k].join('-')
    }
    // console.log(x[1].join('-'));
    return arr
}
// console.log(add(diff));

// 日期减一
var sub = function (arr) {
    let len = arr.length
    let x = []
    for (let i = 0; i < len; i++) {
        // console.log(arr[i][0]);
        x.push(arr[i][1].split("-"))
    }
    for (let j = 0; j < len; j++) {
        x[j][2] = (+x[j][2] - 1).toString()
    }
    for (let k = 0; k < len; k++) {
        arr[k][1] = x[k].join('-')
    }
    // console.log(x[1].join('-'));
    return arr
}
// console.log(sub(diff));
var data = function (diff) {
    diff = add(diff)
    let res = sub(diff)
    return res 
}
// 差集：空余时间
console.log(data(diff)); 
// ["2020-03-23", "2020-04-19"]
// ["2020-07-23", "2020-08-19"]

// 并集：交叉时间
console.log(inter);
// ["2020-05-20", "2020-05-22"]





// console.log(diff[0][0])


// function compareDate(begin = [], over = []){   
//     begin = begin.sort()
//     over  = over.sort()
//     for(let i=1;i<begin.length;i++){
//       if (begin[i] <= over[i-1]){
//         return false // 有重叠
//       }
//     }
//     return true // 没有重叠
//   }


             
// function compareDate(){
//     var begin = ['2015-01-02 10:01:38','2015-01-04 09:28:12','2015-01-11 01:37:13'];
//     var over = ['2015-01-04 10:27:21','2015-01-09 21:28:13','2015-01-16 10:22:23'];

//     begin = begin.sort();
//     console.log(begin);
//     over  = over.sort();
//     console.log(over);

//     for(i=1;i<begin.length;i++){
//         if (begin[i] <= over[i-1]){
//             alert("时间有重复！");
//             return false;
//         }
//     }

//     alert("时间没有重复！");
//     return true
// }
// console.log(compareDate());
