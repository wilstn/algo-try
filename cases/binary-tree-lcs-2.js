function pathFromParent(parentNode, node, path) {
  if (parentNode == null) return false

  path.push(parentNode)

  if (parentNode.val == node.val) return true

  if (pathFromParent(parentNode.left, node, path) || pathFromParent(parentNode.right, node, path)) return true

  path.pop()
  return false
}

function lowestCommonAncestor(bTree, node1, node2) {
  if (bTree.val == node1.val || bTree.val == node2.val) return bTree.val

  let path1 = []
  let path2 = []
  pathFromParent(bTree, node1, path1)
  pathFromParent(bTree, node2, path2)

  let i;

  for (i = 0; i < path1.length && i < path2.length; i++) {
    if (path1[i].val != path2[i].val) {
      break
    }
  }

  return path1[i-1].val
}

module.exports = lowestCommonAncestor;