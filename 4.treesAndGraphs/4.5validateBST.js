/*
input: tree
output: boolean
constraints: none
edge cases: none

*/

var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let tree = new Node(5)
tree.left = new Node(3)
tree.right = new Node(7)
tree.left.left = new Node(2)
tree.left.right= new Node(4)
tree.right.left = new Node(6)
tree.right.right = new Node(8)

const validateBST = (node) => {
  return checkBST(node, null, null)

}

const checkBST = (node, min, max) => {
  if (!node) {
    return true;
  }
  if ((min && min > node.value) || (max && max < node.value)) {
    return false
  } else {
    return checkBST(node.left, min, node.value) && checkBST(node.right, node.value, max)
  }
}

validateBST(tree)

