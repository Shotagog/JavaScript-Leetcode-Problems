//////////////////////////////////////////////Count Common Words With One Occurrence/////////////////////////////////////////////////
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:
//
// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:
//
// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".
const countWords = function(words1, words2) {
    if(words1.length === 0 || words2.length === 0) return 0;

    let firstArr = words1.filter((v, i, a) => a.indexOf(v) === a.lastIndexOf(v) );
    let secondArr = words2.filter((v, i, a) => a.indexOf(v) === a.lastIndexOf(v) );

    let lng = firstArr.length > secondArr.length ? firstArr.length : secondArr.length
    let count = 0;

    for ( let i = 0; i < lng; i++){
        for ( let j = 0; j < lng; j++){
            if(firstArr[j] === secondArr[i]){
                count ++;
            }
        }
    }

    return count;
};

// console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]));
// console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"]));
// console.log(countWords(["a","ab"], ["a","a","a","ab"]));