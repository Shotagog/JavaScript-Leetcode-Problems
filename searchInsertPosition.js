//////////////////////////////////////////////Search Insert Position/////////////////////////////////////////////////////
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:
//
// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:
//
// Input: nums = [1], target = 0
// Output: 0
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
const searchInsert = function(nums, target) {
    return newArr = nums.concat(target)
        .sort((a, b) => a - b)
        .filter((a, i, w) => w.indexOf(a) === i).indexOf(target);
};

// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
// console.log(searchInsert([1,3,5,6], 0));
// console.log(searchInsert([1,2,3,4,5,10], 2));
// console.log(searchInsert([1], 0));