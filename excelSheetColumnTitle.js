////////////////////////////////////////////////Excel Sheet Column Title/////////////////////////////////////////////
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// Example 1:
// Input: columnNumber = 1
// Output: "A"
// Example 2:
// Input: columnNumber = 28
// Output: "AB"
// Example 3:
// Input: columnNumber = 701
// Output: "ZY"
// Example 4:
// Input: columnNumber = 2147483647
// Output: "FXSHRXW"
/**
 * @param {number} columnNumber
 * @return {string}
 */
 const convertToTitle = function(columnNumber) {
    let colName = [];

    while (columnNumber > 0) {
        // Find remainder
        let rem = columnNumber % 26;

        // If remainder is 0, then a 'Z' must be there in output
        if (rem === 0) {
            colName.push("Z");
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }else{
            // If remainder is non-zero
            colName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }

    // Reverse the string and print result
    return colName.reverse().join("");
};

// console.log(convertToTitle(1));
// console.log(convertToTitle(28));
// console.log(convertToTitle(701));
// console.log(convertToTitle(2147483647));