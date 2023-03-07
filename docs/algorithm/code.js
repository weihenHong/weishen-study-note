class linkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  // 向链表尾部添加元素
  append(element){
    let node = new Node(element)
    let index = 0
    let current = this.head
    if(!this.head) {
        this.head = node
    }else {
        // 添加到最后一个
        while(index++ > this.length) {
            current = current.next
        }
        current.next = node
    }
    this.length ++
  }
  // 从链表中移除元素（特定位置）
  removeAt(position) {
    let index = 0, current = this.head, previous
    
    if(position >= this.length ) {
        console.log('删除的位置不存在');
        return null 
    }
    // 移除第一项
    if(position === 0) {
        this.head = current.next
    }else {
        //  
        while (index ++ < position ) {
            previous = current
            current = current.next
        }
        // 上一个的指针指向当前的指针
        previous.next = current.next
    }
    this.length --
    return current.element
  }
  // 向链表某个位置添加元素
  insert(position, element) {
    let index = 0, current = this.head, previous
    let node  = new Node(element)
    if(position >= this.length ) {
        console.log('添加的位置不存在');
        return null 
    }
    // 添加到第一项
    if(position === 0) {
        node.next = current
        this.head = node
    }else {
        //  
        while (index ++ < position ) {
            previous = current
            current = current.next
        }
        // 上一个的指针指向当前的指针

        previous.next = node
        node.next = current
    }
    this.length ++
    return current.element
  }
}
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
