// 判断一个链表是否有环

// 法一、标志法
var f1 = function(head){
    while(head){
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}

// 法二、利用JSON.stringfy()不能序列化含有循环引用的结构
var f2 = function(head){
    try{
        JSON.stringify(head)
        return false
    }catch(e){
        return true
    }
}

// 法三、快慢指针
var f3 = function(head){
    if (!head || !head.next) {
        return false
    }
    var fast = head.next.next
    var slow = head.next
    while(fast !== slow){
        if (!fast || !fast.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
