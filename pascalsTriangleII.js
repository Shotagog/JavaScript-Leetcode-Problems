//////////////////////////////////////////////Pascal's Triangle II/////////////////////////////////////////////////
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
//
// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:
//
// Input: rowIndex = 0
// Output: [1]
// Example 3:
//
// Input: rowIndex = 1
// Output: [1,1]
const getRow = function(rowIndex) {
    let triangle = [], firstRow = [];
    firstRow.push(1);
    triangle.push(firstRow);

    if(rowIndex === 0) return triangle[0];

    for (let i = 1; i <= rowIndex; i++){
        let prevRow = triangle[i - 1];
        let row = [];
        row.push(1);

        for (let j = 1; j < i; j++){
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        row.push(1);
        triangle.push(row);
    }

    return triangle[rowIndex];
};

// console.log(getRow(3));
// console.log(getRow(0));
// console.log(getRow(1));