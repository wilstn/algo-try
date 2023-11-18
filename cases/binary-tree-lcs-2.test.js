const buildTree = require("./build-binary-tree-3")
const lowestCommonAncestor = require("./binary-tree-lcs-2")

describe("Given an binary tree, val1 and val2", () => {
  test("(test case 1) finds the lowest common ancestor", () => {
    let bTree = buildTree([3,5,1,6,2,0,8,null,null,7,4])
    let n1 = bTree.findNode(5)
    let n2 = bTree.findNode(1)
    let result = 3

    expect(lowestCommonAncestor(bTree, n1, n2)).toEqual(result);
  })

  test("(test case 2) finds the lowest common ancestor", () => {
    let bTree = buildTree([3,5,1,6,2,0,8,null,null,7,4])
    let n1 = bTree.findNode(5)
    let n2 = bTree.findNode(4)
    let result = 5

    expect(lowestCommonAncestor(bTree, n1, n2)).toEqual(result);
  })

  test("(test case 3) finds the lowest common ancestor", () => {
    let bTree = buildTree([1,2])
    let n1 = bTree.findNode(1)
    let n2 = bTree.findNode(2)
    let result = 1

    expect(lowestCommonAncestor(bTree, n1, n2)).toEqual(result);
  })
})