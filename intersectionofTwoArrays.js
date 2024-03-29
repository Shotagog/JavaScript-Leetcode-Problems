////////////////////////////////////////////////Intersection of Two Arrays///////////////////////////////////////////
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 const intersection = function(nums1, nums2) {
    const res = nums1.filter(v => nums2.includes(v));
    return [... new Set(res)];
};

// console.log(intersection([1,2,2,1],[2,2]));
// console.log(intersection([4,9,5],[9,4,9,8,4]));