const { tree } = require('./others/algorithm/tree/buildTree')
function traversalByStack(current) {
  let stk = [],
    res = []
  while (current || stk.length) {
    while (current) {
      stk.push(current)
      res.push(current.value)
      current = current.left
    }
    current = stk.shift().right
  }
  return res
}

console.log(traversalByStack(tree))
