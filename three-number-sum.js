/**
 * Receives an array of integers and a target sum.
 * Find the triplets that sum the target sum and return them as a nested array.
 */

// O(nˆ2) time | O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a-b)
  const result = []

  for(let i=0; i<array.length; i++) {
    const a = array[i]

    for(let k=i+1; k<array.length-1; k++) {
      const b = array[k]
      const c = targetSum - a - b

      const cIndex = array.indexOf(c)
      if(cIndex !== -1 && cIndex > k) {
        const triplet = [a, b, c]
        triplet.sort((a, b) => a-b)
        result.push(triplet)
      }
    }
  }
  return result
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0) // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33) // []