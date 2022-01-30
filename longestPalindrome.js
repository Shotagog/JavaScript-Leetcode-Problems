////////////////////////////////////////////////Longest Palindrome///////////////////////////////////////////
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that
// can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Example 1:
//
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
//
// Input: s = "a"
// Output: 1
// Example 3:
//
// Input: s = "bb"
// Output: 2
/**
 * @param {string} s
 * @return {number}
 */
 const longestPalindrome = function(s) {
    let count = 0, m = s.split("").sort();

    for(let i = 0; i < m.length-1; i++) {
        if(m[i] === m[i + 1]) {
            count += 2;
            m.splice(i,2);
            i--;
        }
    }
    if(m.length > 0) count++;
    return count;
};

// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("bb"));