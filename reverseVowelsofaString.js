////////////////////////////////////////////////Reverse Vowels of a String///////////////////////////////////////////
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
// Example 1:
// Input: s = "hello"
// Output: "holle"
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
/**
 * @param {string} s
 * @return {string}
 */
 const reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let right = s.length - 1, left = 0, result = s.split('');
    while (left < right) {
        const leftChar = result[left].toLowerCase(), rightChar = result[right].toLowerCase()
        if (!vowels.has(leftChar)) left++;
        if (!vowels.has(rightChar)) right--;
        if (vowels.has(leftChar) && vowels.has(rightChar)) {
            [result[right], result[left]] = [result[left], result[right]]
            left++;
            right--;
        }
    }

    return result.join('');
};

// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"));