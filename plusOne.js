//////////////////////////////////////////////Plus One/////////////////////////////////////////////////////
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
//
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
//
// Input: digits = [0]
// Output: [1]
// Explanation: The array represents the integer 0.
// Incrementing by one gives 0 + 1 = 1.
// Thus, the result should be [1].
// Example 4:
//
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
const plusOne = function(digits) {
    let el = 0;
    for (let i = digits.length - 1 ; i >= 0; i--){
        el = (digits[i] + 1 === 10) ? 1 : 0;
        if (el === 0){
            digits[i] = digits[i] + 1;
            break;
        }else{
            digits[i] = 0 ;
        }
    }

    if (el === 1){
        digits.unshift(1);
    }
    return digits;
};

// console.log(plusOne([1,2,3]));
// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([0]));
// console.log(plusOne([9]));
// console.log(plusOne([9,9]));