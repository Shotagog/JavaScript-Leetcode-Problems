////////////////////////////////////////////////Valid Anagram///////////////////////////////////////////
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isAnagram = function(s, t) {
    function spl(str) {
        return str.split('').sort().join('');
    }

    let st1 = spl(s), st2 = spl(t);
    return st1 === st2;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));