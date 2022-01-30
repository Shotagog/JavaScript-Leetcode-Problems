////////////////////////////////////////////////add all Digits///////////////////////////////////////////
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:
// Input: num = 0
// Output: 0
/**
 * @param {number} num
 * @return {number}
 */
 const addDigits = function(num) {
    let result = num;

    while (result >= 10) {
        result = result.toString().split('').reduce((count, val) => (count += parseInt(val)), 0);
    }

    return result;
};

// console.log(addDigits(38));
// console.log(addDigits(0));