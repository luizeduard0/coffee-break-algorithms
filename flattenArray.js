/**
 * Receives a multidimensional array and returns a flattened array
 */

const flattenArray = (array, result = []) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i], result)
    } else {
      result.push(array[i])
    }
  }
  return result
}

flattenArray([1, [2, [3, [4, [5, [6]]]], [7, 9, [10, 11]]], 8]) // [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 8]
flattenArray([[1, 2, [3, [4, [5, [6, 7]]]]], 8]) // [1, 2, 3, 4, 5, 6, 7, 8])