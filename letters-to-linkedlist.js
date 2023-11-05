
class LinkedList {
  constructor(value = null) {
    this.value = value,
      this.next = null
  }
}

function convertToLinkedLink(string) {
  const length = string.length
  let list = new LinkedList()

  let node = list
  for (let i = 0; i < length; i++) {
    node.value = string[i]
    node.next = new LinkedList()
    node = node.next
  }

  return list
}

function printJ(head) {
  let curr = head;
  while (curr.next) {
    console.log(curr.value + " -> ");
    curr = curr.next;
  }
}

const letters = 'GEEKS'
const result = convertToLinkedLink(letters)
printJ(result)