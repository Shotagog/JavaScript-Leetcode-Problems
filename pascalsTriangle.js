//////////////////////////////////////////////Pascal's Triangle/////////////////////////////////////////////////
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
//
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
//
// Input: numRows = 1
// Output: [[1]]
const generate = function(numRows) {
    let triangle = [], firstRow = [];
    if(numRows === 0) return triangle;

    firstRow.push(1);
    triangle.push(firstRow);

    for (let i = 1; i < numRows; i++){
        let prevRow = triangle[i - 1];
        let row = [];
        row.push(1);

        for (let j = 1; j < i; j++){
            row.push(prevRow[j - 1] + prevRow[j]);
        }

        row.push(1);
        triangle.push(row);
    }

    return triangle;
};

// console.log(generate(5));
// console.log(generate(1));