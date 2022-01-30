////////////////////////////////////////////////to Hex///////////////////////////////////////////
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem.
// Example 1:
//
// Input: num = 26
// Output: "1a"
// Example 2:
//
// Input: num = -1
// Output: "ffffffff"
/**
 * @param {number} num
 * @return {string}
 */
 const toHex = function(num) {
    if(num === 0) return '0';
    const hMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hex = '';
    if(num > 0 ) {
        while(num !== 0) {
            hex = hMap[num % 16] + hex;
            num = parseInt(num / 16);
        }
    } else {
        hex = toHex(0xffffffff - Math.abs(num) + 1);
    }
    return hex;
};

// console.log(toHex(26));
// console.log(toHex(-1));