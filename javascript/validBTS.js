class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  // type your code here
  if(root === null){
    return
  }
  let queue = []
  queue.push(root)

  let validityCheck = (node) => {
    if(root.left !== null){
      if(root.left.val >= root.val){
        return false
      }
    }
    if(root.right !== null){
      if(root.right.val <= root.val){
        return false
      }
    }
    return true
  }

  if(validityCheck(root)){
    queue.shift()
    if(root.right !== null){
      queue.unshift(root.right)
    }
    if(root.left !== null){
      queue.unshift(root.left)
    }
    if(queue.length > 0){
      return isValidBST(queue[0])
    } else {
      return true
    }
  } else {
    return false
  }
}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

console.log("")

console.log("Expecting: false")
console.log("=>", isValidBST(T(5, T(1), T(4, T(3), T(6)))))

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution