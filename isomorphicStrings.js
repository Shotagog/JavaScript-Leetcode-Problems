////////////////////////////////////////////////Isomorphic Strings/////////////////////////////////////////////
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isIsomorphic = function(s, t) {
    const getIsomorphicString = (str) => {
        let map = {}, resString = '', count = 0;
        for(let letter of str){
            if(map[letter]){
                resString += map[letter];
            }else{
                count++;
                map[letter] = count;
                resString += map[letter];
            }
        }
        return resString
    };

    let sString = getIsomorphicString(s), tString = getIsomorphicString(t);

    return sString === tString;
};

// console.log(isIsomorphic("egg","add"));
// console.log(isIsomorphic("foo","bar"));
// console.log(isIsomorphic("paper","title"));