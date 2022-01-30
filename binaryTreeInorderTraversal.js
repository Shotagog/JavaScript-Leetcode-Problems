//////////////////////////////////////////////Binary Tree Inorder Traversal/////////////////////////////////////////////////
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:
//
// Input: root = []
// Output: []
// Example 3:
//
// Input: root = [1]
// Output: [1]
// Example 4:
//
// Input: root = [1,2]
// Output: [2,1]
// Example 5:
//
// Input: root = [1,null,2]
// Output: [1,2]
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }
const inorderTraversal = function(root) {
    // return !root ? [] : [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
    let res = [], stack = [];
    while(true)
    {
        if(root != null)
        {
            stack.push(root);
            root = root.left;
        }else{
            if(stack.length === 0){
                break;
            }
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
};

// console.log(inorderTraversal([1,null,2,3]));
// console.log(inorderTraversal([]));
// console.log(inorderTraversal([1]));
// console.log(inorderTraversal([1, 2]));
// console.log(inorderTraversal([1, null, 2]));