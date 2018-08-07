/*
input: tree
output: value
constraints: none
edge cases: none

*/

var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let tree = new Node(20)
tree.left = new Node(8)
tree.right = new Node(22)
tree.left.left = new Node(4)
tree.left.right = new Node(12)
tree.left.right.left = new Node(10)
tree.left.right.right = new Node(14)

const successor = (node, value) => {
  let next = node.value

  let findSuccessor = (node, value) => {
    if (!node) {
      return;
    }
    if (node.value > value) {
      if (value <= node.value) {
        next = node.value
      }
      next = Math.min(node.value, next)
      findSuccessor(node.left, value)
    } else if (node.value <= value) {
      if (value < node.value) {
        next = Math.max(node.value, next)
      }
      findSuccessor(node.right, value)
    }
  }

  findSuccessor(node, value)

  if (next <= value) {
    return null
  } else {
    return next;
  }


}

successor(tree, 22)