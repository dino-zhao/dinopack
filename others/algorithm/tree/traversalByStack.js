const {tree}=require('./buildTree')
function traversalByStack(root){
    const stk = [];
    while (root || stk.length) {
        while (root) {
            // console.log(root.value); //先序
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        // console.log(root.value); //中序
        root = root.right;
        console.log(root)
    }

}

traversalByStack(tree)