////////////////////////////////////////////////Valid Perfect Square///////////////////////////////////////////
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
// Example 1:
// Input: num = 16
// Output: true
// Example 2:
// Input: num = 14
// Output: false
/**
 * @param {number} num
 * @return {boolean}
 */
 const isPerfectSquare = function(num) {
    let i = 0;
    while (i * i < num){
        i++;
        console.log(i)
    }
    return (i * i === num) ? true : false;
};

// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(14));
// console.log(isPerfectSquare(9));