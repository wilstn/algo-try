const lowestCommonAncestor = require("./binary-tree-lcs")

describe("Given an array of numbers (binary tree), val1 and val2", () => {
  test("(test case 1) finds the lowest common ancestor", () => {
    let bTreeArray = [3,5,1,6,2,0,8,null,null,7,4]
    let v1 = 5
    let v2 = 1
    let result = 3

    expect(lowestCommonAncestor(bTreeArray, v1, v2)).toEqual(result);
  })

  test("(test case 2) finds the lowest common ancestor", () => {
    let bTreeArray = [3,5,1,6,2,0,8,null,null,7,4]
    let v1 = 5
    let v2 = 4
    let result = 5

    expect(lowestCommonAncestor(bTreeArray, v1, v2)).toEqual(result);
  })

  test("(test case 3) finds the lowest common ancestor", () => {
    let bTreeArray = [1,2]
    let v1 = 1
    let v2 = 2
    let result = 1

    expect(lowestCommonAncestor(bTreeArray, v1, v2)).toEqual(result);
  })
})