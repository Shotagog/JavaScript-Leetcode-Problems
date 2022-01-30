////////////////////////////////////////////////Binary Tree Paths///////////////////////////////////////////
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.
// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:
// Input: root = [1]
// Output: ["1"]
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
 * @return {string[]}
 */
 const binaryTreePaths = function(root) {
    if(root === null) return root;
    const result = [];
    function traverse(root, str){
        if(!root.left && !root.right) result.push(str + root.val);
        if(root.left) traverse(root.left, str + root.val + "->");
        if(root.right) traverse(root.right, str + root.val + "->");
    }
    traverse(root, "");
    return result;
};

// console.log(binaryTreePaths([1,2,3,null,5]));
// console.log(binaryTreePaths([1]));