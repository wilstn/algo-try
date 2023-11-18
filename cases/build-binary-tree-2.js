// This iterates over the array of nodeValues by incrementing the index value
// for each node value (if its not null), it pushes 2 "jobs" (the left and right nodes) onto a queue,
// a while loop works through the queue, working through each left and right node,
// populating the nodes as it iterates through the nodeValues array,

function buildTree(nodeValues) {
  let index = 0
  let root = { value: nodeValues[index++] }
  let queue = [root]

  while (queue.length > 0) {
    let currentNode = queue.shift()

    if (currentNode.value != null) {
      let leftValue = nodeValues[index++]
      let rightValue = nodeValues[index++]

      currentNode.left = leftValue != null ? { value: leftValue } : {}
      currentNode.right = rightValue != null ? { value: rightValue } : {}
      queue.push(currentNode.left, currentNode.right)
    }
  }

  return root
}
module.exports = buildTree;