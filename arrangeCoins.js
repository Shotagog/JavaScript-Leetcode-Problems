////////////////////////////////////////////////arrange Coins///////////////////////////////////////////
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row
// has exactly i coins. The last row of the staircase may be incomplete.
// Given the integer n, return the number of complete rows of the staircase you will build.
// Example 1:
// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:
//
//
// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
/**
 * @param {number} n
 * @return {number}
 */
 const arrangeCoins = function(n) {
    if (!n) return 0;
    let left = 1, right = n;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (mid * (mid + 1) <= 2 * n && (mid + 1) * (mid + 2) > 2 * n) return mid;
        if (mid * (mid + 1) <= 2 * n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));