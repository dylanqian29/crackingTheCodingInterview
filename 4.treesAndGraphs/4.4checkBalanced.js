const checkBalanced = (head) => {
  
  if (head === null){
    return true
  }
  if (Math.abs(countDepths(head.left) - countDepths(head.right) >1)){
    return false
  } else {
    return checkBalanced(head.left) && checkBalanced(head.right)
  }

}

const countDepths = (node) => {
  if (node ===null ) {
    return -1 
  }
  return  Math.max(countDepths(node.left), countDepths(node.right))+1
} 