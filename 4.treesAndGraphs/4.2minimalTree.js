/*
input: array
output: tree
constraints: none
edge cases: none

*/

var Node = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

const minimalTree = (array) => {
  let index = Math.floor(array.length / 2)
  let val = array[index]
  let node = new Node(val);

  if (index === 0){
    node.left = null
  } else {
    node.left = minimalTree(array.slice(0, index ))
  }

  if (index === array.length-1){
    node.right = null
  } else {
    node.right = minimalTree(array.slice(index + 1))
  }
  return node 
}

minimalTree([1, 2, 3, 4, 5, 6, 7])
minimalTree([1, 2, 3, 4, 5, 6, 7, 8])