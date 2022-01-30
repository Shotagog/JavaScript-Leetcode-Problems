////////////////////////////////////////////////Word Pattern///////////////////////////////////////////
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 const wordPattern = function(pattern, s) {
    if (pattern === '' || s === '') return false;
    const str = s.split(' ');
    if (str.length !== pattern.length) return false;
    let pth = {}, word = {};
    for (let i = 0; i < str.length; i++) {
        if (!pth.hasOwnProperty(pattern[i]) && !word[str[i]]) {
            pth[pattern[i]] = str[i];
            word[str[i]] = true;
        } else {
            if (pth[pattern[i]] !== str[i]) {
                return false;
            }
        }
    }
    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog dog dog dog"));