//////////////////////////////////////////////Add Binary/////////////////////////////////////////////////////
// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
// simple way to convert number to binary
// Number(42).toString(2);
const addBinary = function(a, b) {
    let len1 = a.length, len2 = b.length, max = Math.max(len1, len2), res = '', carry = 0, val = 0;

    for (let i = 0; i < max; i++) {
        val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
        carry = Math.floor(val / 2);
        res = (val % 2) + res;
    }

    if (carry) res = 1 + res;

    return res;
};

// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));