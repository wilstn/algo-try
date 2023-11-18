const buildTree = require("./build-binary-tree-2")

describe("Given an array of numbers", () => {
  let nodeValues = [5, 2, 6, 1, null, 8, null]
  let result = {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1, left: {}, right: {}
      },
      right: {}
    },
    right: {
      value: 6,
      left: {
        value: 8, left: {}, right: {}
      },
      right: {}
    }
  }

  it("expects to build a binary tree", () => {
    expect(buildTree(nodeValues)).toEqual(result);
  })
})