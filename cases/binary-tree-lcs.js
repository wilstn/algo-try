// Assumptions: all unique, no duplicates

function findParents(nodeIndex) {
  let currentIndex = nodeIndex
  let parents = []

  while (currentIndex > 0) {
    let parentIndex = currentIndex % 2 == 0 ? currentIndex / 2 - 1 : Math.floor(currentIndex / 2)
    currentIndex = parentIndex
    parents.unshift(parentIndex)
  }

  return parents
}

function findLastCommon(array1, array2) {
  let latestParentIndex = 0
  let indexLimit = Math.min(array1.length, array2.length) - 1

  while (latestParentIndex < indexLimit) {
    if (array1[latestParentIndex] == array2[latestParentIndex]) {
      latestParentIndex++
    } else {
      latestParentIndex--
      break
    }
  }

  return latestParentIndex
}

function lowestCommonAncestor(bTreeArray, value1, value2) {
  let value1Idx = bTreeArray.indexOf(value1)
  let value2Idx = bTreeArray.indexOf(value2)

  if (value1Idx == 0) return value1
  if (value2Idx == 0) return value2

  let value1ParentIndexes = findParents(value1Idx)
  let value2ParentIndexes = findParents(value2Idx)

  if (value1ParentIndexes.includes(value2Idx)) {
    return bTreeArray[value2Idx]
  } else if (value2ParentIndexes.includes(value1Idx)) {
    return bTreeArray[value1Idx]
  }

  let lowestCommonAncestorIndex = findLastCommon(value1ParentIndexes, value2ParentIndexes)

  return bTreeArray[lowestCommonAncestorIndex]
}

module.exports = lowestCommonAncestor;