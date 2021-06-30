const { tree } = require('./others/algorithm/tree/buildTree')
function traversalByStack(current) {
 let cur=[current],res=[]
 while(cur.length){
     const curNodes=[]
     while(cur.length){
         let curNode=cur.shift()
         res.push(curNode.value)
         curNode.left&&curNodes.push(curNode.left)
         curNode.right&&curNodes.push(curNode.right)
     }
     cur=curNodes
 }
 return res
}

console.log(traversalByStack(tree))
