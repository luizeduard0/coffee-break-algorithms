/**
 * Returns a sorted array using selection sort algorithm
 */

// O(n^2) time | O(1) space
function selectionSort(array) {
  let currentIndex = 0
  
  while(currentIndex < array.length) {
    let smallestIndex = currentIndex
    for(let i=currentIndex+1; i<array.length; i++) {
      if(array[i] < array[smallestIndex]) {
        smallestIndex = i
      }
    }
    swap(smallestIndex, currentIndex, array)
    currentIndex++
  }
  return array
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]
}


console.log(selectionSort(
  [8, 9, 5, 4, 3, 1, 2, 6, 7]
))