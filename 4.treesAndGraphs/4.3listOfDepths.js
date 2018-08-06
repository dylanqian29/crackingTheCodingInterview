/*
input: tree;
output

*/


var LinkList = function (value) {
  this.value = value
  this.next = null
}

const listOfDepths = (head) => {
  const results = [];
  const queue = [];

  queue.push(head)

  const getLinkList = (queue) => {
    let dummy = new LinkList("")
    let l1 = dummy
    for (let i = 0; i < queue.length; i++) {
      l1.next = new LinkList(queue[i].value)
      l1 = l1.next
    }

    results.push(dummy.next)

    let nextQueue = []
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) {
        nextQueue.push(queue[i].left)
      }
      if (queue[i].right) {
        nextQueue.push(queue[i].right)
      }
    }

    if (nextQueue.length !== 0) {
      getLinkList(nextQueue)
    } else {
      return;
    }
  }
  getLinkList(queue);
  return results

}

listOfDepths(tree)
// use example from 4.2 as tree to test