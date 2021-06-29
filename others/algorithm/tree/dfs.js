
const {tree}=require('./buildTree')
function dfs(root){
    if(root===null) return
    console.log(root.value)
    dfs(root.left)
    dfs(root.right)
    
   
}

dfs(tree)