////////////////////////////////////////////////Power of Two/////////////////////////////////////////////
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:
// Input: n = 3
// Output: false
// Example 4:
// Input: n = 4
// Output: true
// Example 5:
// Input: n = 5
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
 const isPowerOfTwo = function(n) {
    if(n < 0) return false;
    return n && (n & (n - 1)) === 0;
};

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(-2147483648));