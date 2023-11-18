const buildTree = require('./build-binary-tree-3');

describe("Given an array of numbers", () => {
  let nodeValues = [5, 2, 6, 1, null, 8, null]

  it("expects to build a binary tree", () => {
    let result = {
      val: 5,
      left: {
        val: 2,
        left: {
          val: 1, left: null, right: null
        },
        right: null
      },
      right: {
        val: 6,
        left: {
          val: 8, left: null, right: null
        },
        right: null
      }
    }

    expect(buildTree(nodeValues)).toEqual(result);
  })

  it("expects to find node", () => {
    let btree = buildTree(nodeValues)
    let result = {
      val: 6,
      left: { val: 8, left: null, right: null },
      right: null
    }

    expect(btree.findNode(6)).toEqual(result);
  })
})