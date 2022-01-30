//////////////////////////////////////////////Balanced Binary Tree/////////////////////////////////////////////////
// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
// Example 1:
//
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
//
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
//
// Input: root = []
// Output: true
const isBalanced = function(root) {
    if(!root) return true;
    return isBalancedHelper(root);
};

function isBalancedHelper(node){
    let leftSubTree, rightSubTree;
    if(!node) return 0;
    leftSubTree = isBalancedHelper(node.left);
    rightSubTree = isBalancedHelper(node.right);
    if(leftSubTree === false || rightSubTree === false) return false;
    if(Math.abs(leftSubTree - rightSubTree) > 1) return false;
    return (Math.max(leftSubTree , rightSubTree) + 1);
}

// console.log(isBalanced([3,9,20,null,null,15,7]));
// console.log(isBalanced([1,2,2,3,3,null,null,4,4]));
// console.log(isBalanced([]));