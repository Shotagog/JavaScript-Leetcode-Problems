
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




////////////////////////////////////////////////Guess Number Higher or Lower///////////////////////////////////////////
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns 3 possible results:
// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.
// Example 1:
//
// Input: n = 10, pick = 6
// Output: 6
// Example 2:
//
// Input: n = 1, pick = 1
// Output: 1
// Example 3:
//
// Input: n = 2, pick = 1
// Output: 1
// Example 4:
//
// Input: n = 2, pick = 2
// Output: 2
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    let left = 0, right = n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return 0;
};

// console.log(guessNumber(10));
// console.log(guessNumber(1));
// console.log(guessNumber(2));




////////////////////////////////////////////////Ransom Note///////////////////////////////////////////
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let m = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        const index = m.indexOf(ransomNote[i]);
        if (index === -1) return false;
        m.splice(index, 1);
    }
    return true;
};

// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));




////////////////////////////////////////////////First Unique Character in a String///////////////////////////////////////////
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
//
// Input: s = "leetcode"
// Output: 0
// Example 2:
//
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
//
// Input: s = "aabb"
// Output: -1
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))){
            return i;
        }
    }
    return -1;
};

// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("aabb"));




////////////////////////////////////////////////Find the Difference///////////////////////////////////////////
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:
//
// Input: s = "", t = "y"
// Output: "y"
// Example 3:
//
// Input: s = "a", t = "aa"
// Output: "a"
// Example 4:
//
// Input: s = "ae", t = "aea"
// Output: "a"
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    for(let i = 0; i < t.length; i++){
        const find = s.indexOf(t[i]);

        if(find === -1){
            return t[i];
        } else {
            s = s.replace(t[i],'');
        }
    }
};

// console.log(findTheDifference("abcd", "abcde"));
// console.log(findTheDifference("", "y"));
// console.log(findTheDifference("a", "aa"));




////////////////////////////////////////////////Is Subsequence///////////////////////////////////////////
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the
// characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while(i < s.length){
        if(j === t.length){
            return false;
        }
        if(s[i] === t[j]){
            i++;
        }
        j++;
    };
    return true;
};

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));





////////////////////////////////////////////////Binary Watch///////////////////////////////////////////
// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes
// (0-59). Each LED represents a zero or one, with the least significant bit on the right.
// For example, the below binary watch reads "4:51".
// Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the
// watch could represent. You may return the answer in any order.
// The hour must not contain a leading zero.
// For example, "01:00" is not valid. It should be "1:00".
// The minute must be consist of two digits and may contain a leading zero.
// For example, "10:2" is not valid. It should be "10:02".
// Example 1:/
// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:
//
// Input: turnedOn = 9
// Output: []
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = function(turnedOn) {
    const res = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const sec = Number(h * 64 + m)
                .toString(2)
                .split('')
                .filter(d => d === '1').length;
            if (sec === turnedOn){
                res.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`);
            }
        }
    }
    return res;
};

// console.log(readBinaryWatch(1));
// console.log(readBinaryWatch(9));




////////////////////////////////////////////////Sum of Left Leaves///////////////////////////////////////////
// Given the root of a binary tree, return the sum of all left leaves.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:
//
// Input: root = [1]
// Output: 0
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
    const queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.left) {
            if (!current.left.left && !current.left.right) {
                sum += current.left.val;
            } else {
                queue.push(current.left);
            }
        }

        if (current.right) {
            queue.push(current.right);
        }
    }

    return sum;
};

// console.log(sumOfLeftLeaves([3,9,20,null,null,15,7]));
// console.log(sumOfLeftLeaves([1]));




////////////////////////////////////////////////Sum of Left Leaves///////////////////////////////////////////
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
// Note: You are not allowed to use any built-in library method to directly solve this problem.
// Example 1:
//
// Input: num = 26
// Output: "1a"
// Example 2:
//
// Input: num = -1
// Output: "ffffffff"
/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
    if(num === 0) return '0';
    const hMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hex = '';
    if(num > 0 ) {
        while(num !== 0) {
            hex = hMap[num % 16] + hex;
            num = parseInt(num / 16);
        }
    } else {
        hex = toHex(0xffffffff - Math.abs(num) + 1);
    }
    return hex;
};

// console.log(toHex(26));
// console.log(toHex(-1));




////////////////////////////////////////////////Longest Palindrome///////////////////////////////////////////
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that
// can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Example 1:
//
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
//
// Input: s = "a"
// Output: 1
// Example 3:
//
// Input: s = "bb"
// Output: 2
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    let count = 0, m = s.split("").sort();

    for(let i = 0; i < m.length-1; i++) {
        if(m[i] === m[i + 1]) {
            count += 2;
            m.splice(i,2);
            i--;
        }
    }
    if(m.length > 0) count++;
    return count;
};

// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("bb"));




////////////////////////////////////////////////Fizz Buzz///////////////////////////////////////////
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:
//
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
//
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
//
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    let res = []
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            res.push("FizzBuzz")
        }else if(i % 3 === 0){
            res.push("Fizz")
        }else if (i % 5 === 0){
            res.push("Buzz")
        }else{
            res.push(i.toString())
        }
    }
    return res;
};

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));




////////////////////////////////////////////////Third Maximum Number///////////////////////////////////////////
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
// Example 1:
//
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:
//
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
//
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    if(nums.length < 3) return Math.max(...nums);
    let u = new Set(nums);
    if(u.size < 3) return Math.max(...u);

    for(let i = 0; i < 2; i++){
        u.delete(Math.max(...u))
    }

    return Math.max(...u);
};

// console.log(thirdMax([3,2,1]));
// console.log(thirdMax([1,2]));
// console.log(thirdMax([2,2,3,1]));




////////////////////////////////////////////////Add Strings///////////////////////////////////////////
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must
// also not convert the inputs to integers directly.
// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:
//
// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:
//
// Input: num1 = "0", num2 = "0"
// Output: "0"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
    let res = BigInt(num1) + BigInt(num2);
    return res.toString();
};

// console.log(addStrings("11", "123"));
// console.log(addStrings("456", "77"));
// console.log(addStrings("0", "0"));




////////////////////////////////////////////////Number of Segments in a String///////////////////////////////////////////
// You are given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.
// Example 1:
//
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:
//
// Input: s = "Hello"
// Output: 1
// Example 3:
//
// Input: s = "love live! mu'sic forever"
// Output: 4
// Example 4:
//
// Input: s = ""
// Output: 0
/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function(s) {
    return s.split(" ").filter(n => n).length;
};

// console.log(countSegments("Hello, my name is John"));
// console.log(countSegments("Hello,"));
// console.log(countSegments("love live! mu'sic forever"));
// console.log(countSegments(""));
// console.log(countSegments("                "));




////////////////////////////////////////////////Number of Segments in a String///////////////////////////////////////////
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
























