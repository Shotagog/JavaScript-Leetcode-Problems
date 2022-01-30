////////////////////////////////////////////////Ransom Note///////////////////////////////////////////
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 const canConstruct = function(ransomNote, magazine) {
    let m = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        const index = m.indexOf(ransomNote[i]);
        if (index === -1) return false;
        m.splice(index, 1);
    }
    return true;
};

// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));