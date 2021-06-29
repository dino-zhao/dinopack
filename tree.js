const {tree}=require('./others/algorithm/tree/buildTree')
function traversalByStack(root){
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.value);
        root = root.right;
    }
    return res;
}

console.log(traversalByStack(tree))