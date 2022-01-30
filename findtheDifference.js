////////////////////////////////////////////////Find the Difference///////////////////////////////////////////
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:
//
// Input: s = "", t = "y"
// Output: "y"
// Example 3:
//
// Input: s = "a", t = "aa"
// Output: "a"
// Example 4:
//
// Input: s = "ae", t = "aea"
// Output: "a"
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 const findTheDifference = function(s, t) {
    for(let i = 0; i < t.length; i++){
        const find = s.indexOf(t[i]);

        if(find === -1){
            return t[i];
        } else {
            s = s.replace(t[i],'');
        }
    }
};

// console.log(findTheDifference("abcd", "abcde"));
// console.log(findTheDifference("", "y"));
// console.log(findTheDifference("a", "aa"));