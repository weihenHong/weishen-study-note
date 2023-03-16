// class linkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//   }
//   // 向链表尾部添加元素
//   append(element){
//     let node = new Node(element)
//     let index = 0
//     let current = this.head
//     if(!this.head) {
//         this.head = node
//     }else {
//         // 添加到最后一个
//         while(index++ > this.length) {
//             current = current.next
//         }
//         current.next = node
//     }
//     this.length ++
//   }
//   // 从链表中移除元素（特定位置）
//   removeAt(position) {
//     let index = 0, current = this.head, previous
    
//     if(position >= this.length ) {
//         console.log('删除的位置不存在');
//         return null 
//     }
//     // 移除第一项
//     if(position === 0) {
//         this.head = current.next
//     }else {
//         //  
//         while (index ++ < position ) {
//             previous = current
//             current = current.next
//         }
//         // 上一个的指针指向当前的指针
//         previous.next = current.next
//     }
//     this.length --
//     return current.element
//   }
//   // 向链表某个位置添加元素
//   insert(position, element) {
//     let index = 0, current = this.head, previous
//     let node  = new Node(element)
//     if(position >= this.length ) {
//         console.log('添加的位置不存在');
//         return null 
//     }
//     // 添加到第一项
//     if(position === 0) {
//         node.next = current
//         this.head = node
//     }else {
//         //  
//         while (index ++ < position ) {
//             previous = current
//             current = current.next
//         }
//         // 上一个的指针指向当前的指针

//         previous.next = node
//         node.next = current
//     }
//     this.length ++
//     return current.element
//   }
// }
// class Node {
//     constructor(element) {
//         this.element = element
//         this.next = null
//     }
// }
class TreeNode {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySerchTree {
    constructor() {
      this.root = null;
    }
    // 插入
    insert(key) {
      const node = new TreeNode(key);
      if (!this.root) {
        this.root = node;
      } else {
        insertNode(this.root, node);
      }
    }
      remove(key) {
      return removeFn(this.root, this.root, key)
  }
  
      
  }
  
   
  function insertNode(root, node) {
      if(root.key < node.key) {
          if(root.right) {
              insertNode(root.right, node)
          }else {
              root.right = node
          }
      }else {
          if(root.left) {
              insertNode(root.left, node)
          }else {
              root.left = node
          }
      }
  
  
    
  }
  function removeFn(parentRoot, node, key){
      if(node === null) {
          return false 
      }
      if(key < node.key ) {
          parentRoot.left = removeFn(node, node.left, key)
          return parentRoot
      }else if(key > node.key) {
          parentRoot.right = removeFn(node, node.right, key)
          return parentRoot 
      }else {
          // =
          // 没有子节点
          if(node.left === null && node.right === null) {
              node = null
              return node
          }
          // 只有一个子节点
          if(node.left === null) {
              node = node.right
              return node
          }else if(node.right === null) {
              node = node.left
              return node
          }
          // 有两个子节点
          // step: 找到右侧子树中最小的节点，赋值给要删除的节点，删除重复的节点。
          const minNodeInRightSubtree = findMinNode(node.right)
          node.key = minInRightSubtree.key
         removeFn (minNodeInRightSubtree, minNodeInRightSubtree, minNodeInRightSubtree.key)
      }
  }
  function findMinNode(node){
      while(node && node.left!== null) {
          node = node.left
      }
      return node 
  }

// for (let i = 0; i < m ; i++) {
// }
// for (let i = 0; i < n ; i++) {
// }
for (let i = 0; i < m; i++) {
    dp[i][0] = 1
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
}