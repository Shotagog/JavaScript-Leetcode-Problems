////////////////////////////////////////////////Binary Tree Preorder Traversal/////////////////////////////////////////////////
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:
// Input: root = []
// Output: []
// Example 3:
// Input: root = [1]
// Output: [1]
// Example 4:
// Input: root = [1,2]
// Output: [1,2]
// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 const preorderTraversal = function(root) {
    if(root === null) return [];
    const res = [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        res.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return res;
};

// console.log(preorderTraversal([1,null,2,3]));
// console.log(preorderTraversal([1,2]));
// console.log(preorderTraversal([]));