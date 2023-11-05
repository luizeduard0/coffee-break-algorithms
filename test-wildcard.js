/**
 * Given a dictionary of words and a word, determine if the word is in the dictionary.
 * The word may contain wildcard characters '*'.
 */

const words = ['cat', 'car', 'bar', 'carrot', 'bite', 'bitter', 'butter']

class Dictionary {

  constructor(words, word) {
    this.word = word
    this.words = words
      .filter(w => {
        // Exclude diff length
        if (w.length !== word.length) return false

        // Exclude diff first letter
        if (word[0] !== '*' && w[0] !== word[0]) {
          return false
        }

        // Exclude diff last letter
        if (word[word.length - 1] !== '*' && w[w.length - 1] !== word[word.length - 1]) {
          return false
        }
        return true
      })
    return this
  }

  handleWildcard() {
    let matchCount = 0;
    let match = false;

    for (let k = 0; k < this.word.length; k++) {
      matchCount = 0
      let w = this.words[k] || []
      for (let i = 0; i < w.length; i++) {
        if (this.word[i] !== w[i] && this.word[i] !== '*') {
          break;
        } else {
          matchCount++
        }
      }

      if (matchCount > 0 && w.length === matchCount) {
        match = true
        break
      }
    }
    return match
  }

  isInDict() {
    if (this.word.includes('*')) {
      return this.handleWildcard()
    }
    return this.words.includes(this.word)
  }
}

console.log(new Dictionary(words, '*ar').isInDict()) // true
console.log(new Dictionary(words, 'ca*').isInDict()) // true
console.log(new Dictionary(words, 'c*r').isInDict()) // true
console.log(new Dictionary(words, 'bat').isInDict()) // false
console.log(new Dictionary(words, 'b*t*').isInDict()) // false