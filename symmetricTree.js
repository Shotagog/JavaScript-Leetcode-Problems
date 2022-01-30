//////////////////////////////////////////////Symmetric Tree/////////////////////////////////////////////////////
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
//
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
//
// Input: root = [1,2,2,null,3,null,3]
// Output: false
const isSymmetric = function(root) {
    if(!root) return true;
    function checker(l,r){
        if(!l && !r) return true;
        else if(!l || !r) return false;
        else if(l.val !== r.val ) return false;
        return (checker(l.left, r.right) && checker(l.right, r.left));
    }
    return  checker (root.left ,root.right)
}

// console.log(isSymmetric([1,2,2,3,4,4,3]));
// console.log(isSymmetric([1,2,2,null,3,null,3]));