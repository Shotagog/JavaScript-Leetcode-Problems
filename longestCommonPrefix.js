//////////////////////////////////////////////Longest Common Prefix///////////////////////////////////////////////////////
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
const longestCommonPrefix = function(strs) {
    if(!strs.length) return '';

    const sorted = strs.sort((a, b) => a.length - b.length);
    const smallest = sorted[0];

    let res = '';
    for(let i = 0; i < smallest.length; i++){
        let pre = smallest.slice(0, i + 1);
        let has = strs.every((str) => str.startsWith(pre));

        if(has){
            res = pre;
        }
    }
    return res;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));