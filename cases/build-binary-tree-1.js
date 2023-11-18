// The key to this is that the index of the value on the array in relation to where it is on the tree
// is [index of the parent] x 2 + { 1(left), 2(right) }
//                      index 0 is root
//              /                             \
//       [0]x2+{1} = 1                  [0]x2+{2} = 2
//      /             \                /             \
// [1]x2+{1} = 3, [1]x2+{2} = 4   [2]x2+{1} = 5, [2]x2+{2} = 6

function insertLevelOrder(arr, i) {
  if (arr[i] == null) return {};

  if (i < arr.length) {
    return {
      value: arr[i],
      left: insertLevelOrder(arr, 2 * i + 1),
      right: insertLevelOrder(arr, 2 * i + 2)
    }
  }
}

function buildTree(nodeValues) {
  return insertLevelOrder(nodeValues, 0)
}
module.exports = buildTree;