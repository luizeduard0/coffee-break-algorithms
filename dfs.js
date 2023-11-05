const data = {
  name: 'One',
  children: [
    {
      name: 'Two',
      children: [
        {
          name: 'Four',
          children: []
        }
      ]
    },
    {
      name: 'Three',
      children: []
    }
  ]
}

class Node {
  dfs(node, array) {
    array.push(node.name)
    node.children.map((child) => this.dfs(child, array))
    return array
  }
}

const node = new Node()
const result = node.dfs(data, [])

console.log(result)