////////////////////////////////////////////////Binary Tree Postorder Traversal///////////////////////////////////////////////
// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
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
// Output: [2,1]
// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?
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
 var postorderTraversal = function(root) {
    if(root === null) return [];
    const stack = [root];
    const res = [];

    while(stack.length > 0){
        const current = stack.pop();
        res.unshift(current.val);

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return res;
};

// console.log(postorderTraversal([1,null,2,3]));
// console.log(postorderTraversal([1,2]));
// console.log(postorderTraversal([]));