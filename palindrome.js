/** 
 * Receives a string and returns true if it's a palindrome
*/

// O(n) time | O(n) space
function isPalindrome(string) {
  let reversed = []
  for(let i=string.length-1; i>=0; i--) {
    reversed.push(string[i])
  }
  return string === reversed.join('')
}

console.log(isPalindrome('abcdcba')) // true
console.log(isPalindrome('ab')) //false
console.log(isPalindrome('abcdefghhgfedcba')) // true
console.log(isPalindrome('abcdefghihgfedcba')) // true
console.log(isPalindrome('abcdefghihgfeddcba')) // false