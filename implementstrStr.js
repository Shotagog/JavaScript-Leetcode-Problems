//////////////////////////////////////////////Implement strStr()///////////////////////////////////////////////////////
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:
//
// Input: haystack = "", needle = ""
// Output: 0
const strStr = function(haystack, needle) {
    if(!needle) return 0;
    let nl = needle.length;

    for(let i = 0; i <= haystack.length - nl; i++){
        if(haystack.charAt(i) === needle.charAt(0)){
            if(haystack.slice(i, i + nl) === needle){
                return i;
            }
        }
    }

    return -1;
};

// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));
// console.log(strStr("", ""));