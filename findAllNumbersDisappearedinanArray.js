
////////////////////////////////////////////////Find All Numbers Disappeared in an Array///////////////////////////////////////////
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
//
// Input: nums = [1,1]
// Output: [2]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    let res = new Set(Array.from({length: nums.length}, (v, i) => i + 1));
    for(let i = 0; i < nums.length; i++) {
        res.delete(nums[i]);
    }
    return Array.from(res.values());
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
// console.log(findDisappearedNumbers([1,1]));
