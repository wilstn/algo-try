class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

TreeNode.prototype.findNode = function (val) {
  if (this.val == val) return this;

  return this.left?.findNode(val) || this.right?.findNode(val)
}

function insertLevelOrder(arr, i) {
  if (arr[i] == null) return null;

  if (i < arr.length) {
    return new TreeNode(
      arr[i],
      insertLevelOrder(arr, 2 * i + 1),
      insertLevelOrder(arr, 2 * i + 2)
    )
  }
}

function buildTree(nodeValues) {
  return insertLevelOrder(nodeValues, 0)
}
module.exports = buildTree;