






//////////////////////////////////////////////Valid Palindrome/////////////////////////////////////////////////
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric
// characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
const isPalindrome2 = function(s) {
    let str = s.toLowerCase().replace(/[^a-z 0-9]/g, "").split(' ').join('');
    let revStr = str.split('').reverse().join('');

    return str === revStr ? true : false;
};


// console.log(isPalindrome2("A man, a plan, a canal: Panama"));
// console.log(isPalindrome2("race a car"));
// console.log(isPalindrome2("0P"));




//////////////////////////////////////////////Single Number/////////////////////////////////////////////////
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
//
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
//
// Input: nums = [1]
// Output: 1
// Constraints:
//
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
const singleNumber = function(nums) {
    return nums.filter((v, i, a) => a.indexOf(v) === a.lastIndexOf(v))[0];
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));



//////////////////////////////////////////////Linked List Cycle/////////////////////////////////////////////////
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following
// the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
// Constraints:
//
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
// Follow up: Can you solve it using O(1) (i.e. constant) memory?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let fast = head,  slow = head

    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) return true
    }
    return false
};

// console.log(hasCycle([3,2,0,-4]));
// console.log(hasCycle([1, 2]));
// console.log(hasCycle([1]));




////////////////////////////////////////////////Binary Tree Preorder Traversal/////////////////////////////////////////////////
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:
// Input: root = []
// Output: []
// Example 3:
// Input: root = [1]
// Output: [1]
// Example 4:
// Input: root = [1,2]
// Output: [1,2]
// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]
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
 * @return {number[]}
 */
const preorderTraversal = function(root) {
    if(root === null) return [];
    const res = [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();
        res.push(current.val);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return res;
};

// console.log(preorderTraversal([1,null,2,3]));
// console.log(preorderTraversal([1,2]));
// console.log(preorderTraversal([]));






////////////////////////////////////////////////Binary Tree Postorder Traversal///////////////////////////////////////////////
// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:
//
// Input: root = []
// Output: []
// Example 3:
//
// Input: root = [1]
// Output: [1]
// Example 4:
//
// Input: root = [1,2]
// Output: [2,1]
// Example 5:
//
// Input: root = [1,null,2]
// Output: [2,1]
// Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(root === null) return [];
    const stack = [root];
    const res = [];

    while(stack.length > 0){
        const current = stack.pop();
        res.unshift(current.val);

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return res;
};

// console.log(postorderTraversal([1,null,2,3]));
// console.log(postorderTraversal([1,2]));
// console.log(postorderTraversal([]));



////////////////////////////////////////////////Min Stack///////////////////////////////////////////////
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
const MinStack = function() {
    this.data = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.data.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.data)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */




////////////////////////////////////////////////Intersection of Two Linked Lists/////////////////////////////////////////////
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.
// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program.
// If you correctly return the intersected node, then your solution will be accepted.
// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the
// intersected node in A; There are 3 nodes before the intersected node in B.
// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the
// intersected node in A; There are 1 node before the intersected node in B.
// Example 3:
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not
// intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};

// console.log(getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5]));
// console.log(getIntersectionNode([1,9,1,2,4], [3,2,4]));
// console.log(getIntersectionNode([2,6,4], [1,5]));




////////////////////////////////////////////////Two Sum II - Input Array Is Sorted/////////////////////////////////////////////
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that
// they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function(numbers, target) {
    const res = [];

    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                res.push(i + 1, j + 1);
            }
        }
    }

    return res;
};

// console.log(twoSum2([2,7,11,15], 9));
// console.log(twoSum2([2,3,4], 6));
// console.log(twoSum2([-1,0], -1));




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





////////////////////////////////////////////////Majority Element/////////////////////////////////////////////
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
// Follow-up: Could you solve the problem in linear time and in O(1) space?
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const count = {};
    nums.forEach(i => count[i] = (count[i] || 0) + 1);
    let res = Object.keys(count)
                    .reduce((a, b) => count[a] > count[b] ? a : b);
    return res;
};

// console.log(majorityElement([3,2,3]));
// console.log(majorityElement([2,2,1,1,1,2,2]));
// console.log(majorityElement([3,3,4]));




////////////////////////////////////////////////Excel Sheet Column Number/////////////////////////////////////////////
// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
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
//
// Input: columnTitle = "A"
// Output: 1
// Example 2:
// Input: columnTitle = "AB"
// Output: 28
// Example 3:
//
// Input: columnTitle = "ZY"
// Output: 701
// Example 4:
// Input: columnTitle = "FXSHRXW"
// Output: 2147483647
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    let res = 0, index = 0;

    for(let i = columnTitle.length - 1; i >= 0; i--){
        res += Math.pow(26, index++) * (columnTitle[i].charCodeAt(0) - 65 + 1)
    }

    return res;
};

// console.log(titleToNumber("A"));
// console.log(titleToNumber("AB"));
// console.log(titleToNumber("ZY"));
// console.log(titleToNumber("FXSHRXW"));




////////////////////////////////////////////////Reverse Bits/////////////////////////////////////////////
// Reverse bits of a given 32 bits unsigned integer.
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will
// be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the
// input represents the signed integer -3 and the output represents the signed integer -1073741825.
// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return
// 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return
// 3221225471 which its binary representation is 10111111111111111111111111111111.
// Constraints:
// The input must be a binary string of length 32
// Follow up: If this function is called many times, how would you optimize it?
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    const t = n.toString(2).split("");
    while(t.length < 32) t.unshift("0");
    return parseInt(t.reverse().join(""), 2);
};

// console.log(reverseBits(00000010100101000001111010011100));
// console.log(reverseBits(11111111111111111111111111111101));





////////////////////////////////////////////////Number of 1 Bits/////////////////////////////////////////////
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a
// signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
// Constraints:
// The input must be a binary string of length 32.
// Follow up: If this function is called many times, how would you optimize it?
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let sum = 0;
    while (n !== 0) {
        sum++;
        n &= n - 1;
    }
    return sum;
};

// console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeight(00000000000000000000000010000000));
// console.log(hammingWeight(11111111111111111111111111111101));




////////////////////////////////////////////////Happy Number/////////////////////////////////////////////
// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:
// Input: n = 2
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const obj = {};
    let sum = n;

    while (!obj[sum]) {
        obj[sum] = true;

        const nums = String(sum).split('');
        sum = nums.reduce((acc, val) => acc + Math.pow(Number(val), 2), 0);

        if (sum === 1) {
            return true;
        }
    }

    return false;
};

// console.log(isHappy(19));
// console.log(isHappy(2));




////////////////////////////////////////////////Remove Linked List Elements/////////////////////////////////////////////
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:
// Input: head = [], val = 1
// Output: []
// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    if (head === null) return head;
    while (head !== null && head.val === val) {
        head = head.next;
    }
    let curr = head;
    if (curr !== null) {
        while (curr.next != null) {
            if (curr.next.val === val) {
                curr.next = curr.next.next;
            }else{
                curr = curr.next;
            }
        }
    }
    return head;
};

// console.log(removeElements([1,2,6,3,4,5,6], 6));
// console.log(removeElements([], 1));
// console.log(removeElements([7, 7, 7, 7], 7));




////////////////////////////////////////////////Isomorphic Strings/////////////////////////////////////////////
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const getIsomorphicString = (str) => {
        let map = {}, resString = '', count = 0;
        for(let letter of str){
            if(map[letter]){
                resString += map[letter];
            }else{
                count++;
                map[letter] = count;
                resString += map[letter];
            }
        }
        return resString
    };

    let sString = getIsomorphicString(s), tString = getIsomorphicString(t);

    return sString === tString;
};

// console.log(isIsomorphic("egg","add"));
// console.log(isIsomorphic("foo","bar"));
// console.log(isIsomorphic("paper","title"));




////////////////////////////////////////////////Reverse Linked List/////////////////////////////////////////////
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    if(head === null) return head;
    let current = head, prev = null;

    while(current !== null){
        const next = current.next
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// console.log(reverseList([1,2,3,4,5]));
// console.log(reverseList([1,2]));
// console.log(reverseList([]));




////////////////////////////////////////////////Contains Duplicate/////////////////////////////////////////////
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    return nums.some((v, i, a) => a.indexOf(v) !== a.lastIndexOf(v));
};

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));




////////////////////////////////////////////////Contains Duplicate II/////////////////////////////////////////////
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such
// that nums[i] == nums[j] and abs(i - j) <= k.
// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && Math.abs(i - j) <= k){
                return true;
            }
        }
    }
    return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1], 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));



////////////////////////////////////////////////Implement Stack using Queues/////////////////////////////////////////////
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:
// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque
// (double-ended queue) as long as you use only a queue's standard operations.
// Example 1:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
//
// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
const MyStack = function() {
    this.queue = [];
    this.queue2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1) {
        this.queue2.push(this.queue.shift())
    }
    let poped = this.queue.shift()
    this.queue = this.queue2;
    this.queue2 = []
    return poped
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length ? false : true
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */




////////////////////////////////////////////////Invert Binary Tree/////////////////////////////////////////////
// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:
// Input: root = []
// Output: []
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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if(root === null) return root;
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// console.log(invertTree([4,2,7,1,3,6,9]));
// console.log(invertTree([2,1,3]));
// console.log(invertTree([]));




////////////////////////////////////////////////Summary Ranges/////////////////////////////////////////////
// You are given a sorted unique integer array nums.
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums
// is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b
// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
// Example 3:
// Input: nums = []
// Output: []
// Example 4:
// Input: nums = [-1]
// Output: ["-1"]
// Example 5:
// Input: nums = [0]
// Output: ["0"]
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    let res = [], left = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            res.push(left === nums[i] ? '' + nums[i] : left + '->' + nums[i]);
            left = nums[i + 1];
        }
    }
    return res;
};

// console.log(summaryRanges([0,1,2,4,5,7]));
// console.log(summaryRanges([0,2,3,4,6,8,9]));
// console.log(summaryRanges([]));
// console.log(summaryRanges([-1]));
// console.log(summaryRanges([0]));




////////////////////////////////////////////////Power of Two/////////////////////////////////////////////
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:
// Input: n = 3
// Output: false
// Example 4:
// Input: n = 4
// Output: true
// Example 5:
// Input: n = 5
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if(n < 0) return false;
    return n && (n & (n - 1)) === 0;
};

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(-2147483648));




////////////////////////////////////////////////Implement Queue using Stacks/////////////////////////////////////////////
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions
// of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque
// (double-ended queue) as long as you use only a stack's standard operations.
// Example 1:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
const MyQueue = function() {
    this.stack = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.stack.length) {
        this.stack2.push(this.stack.pop())
    }
    let p = this.stack2.pop()
    while (this.stack2.length) {
        this.stack.push(this.stack2.pop())
    }
    return p;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.stack.length || this.stack2.length) ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */





////////////////////////////////////////////////Palindrome Linked List/////////////////////////////////////////////
// Given the head of a singly linked list, return true if it is a palindrome.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome3 = function(head) {
    let str = '',  rev = '';
    while (head) {
        str += head.val;
        rev = head.val + rev;
        head = head.next;
    };
    return str === rev ? true : false;
};

// console.log(isPalindrome3([1,2,2,1]));
// console.log(isPalindrome3([1,2]));




////////////////////////////////////////////////Lowest Common Ancestor of a Binary Search Tree///////////////////////////////////////////
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the
// lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};

// console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8));
// console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4));
// console.log(lowestCommonAncestor([2,1], 2, 1));




////////////////////////////////////////////////Delete Node in a Linked List///////////////////////////////////////////
// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead
// you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.
// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
// Example 3:
// Input: head = [1,2,3,4], node = 3
// Output: [1,2,4]
// Example 4:
// Input: head = [0,1], node = 0
// Output: [1]
// Example 5:
// Input: head = [-3,5,-99], node = -3
// Output: [5,-99]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode2 = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// console.log(deleteNode2(5));
// console.log(deleteNode2(1));
// console.log(deleteNode2(3));
// console.log(deleteNode2(0));
// console.log(deleteNode2(-3));




////////////////////////////////////////////////Valid Anagram///////////////////////////////////////////
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    function spl(str) {
        return str.split('').sort().join('');
    }

    let st1 = spl(s), st2 = spl(t);
    return st1 === st2;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));





////////////////////////////////////////////////Binary Tree Paths///////////////////////////////////////////
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.
// Example 1:
// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:
// Input: root = [1]
// Output: ["1"]
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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    if(root === null) return root;
    const result = [];
    function traverse(root, str){
        if(!root.left && !root.right) result.push(str + root.val);
        if(root.left) traverse(root.left, str + root.val + "->");
        if(root.right) traverse(root.right, str + root.val + "->");
    }
    traverse(root, "");
    return result;
};

// console.log(binaryTreePaths([1,2,3,null,5]));
// console.log(binaryTreePaths([1]));




////////////////////////////////////////////////Binary Tree Paths///////////////////////////////////////////
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:
// Input: num = 0
// Output: 0
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    let result = num;

    while (result >= 10) {
        result = result.toString().split('').reduce((count, val) => (count += parseInt(val)), 0);
    }

    return result;
};

// console.log(addDigits(38));
// console.log(addDigits(0));




////////////////////////////////////////////////Ugly Number///////////////////////////////////////////
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// Example 1:
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:
// Input: n = 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
// Example 4:
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function(n) {
    const arr = [2, 3, 5];

    for (let i = 0; i < arr.length && n > 1; i++){
        while( n % arr[i] === 0){
            n /= arr[i]
        }
    }
    return n === 1;
};

// console.log(isUgly(6));
// console.log(isUgly(8));
// console.log(isUgly(14));
// console.log(isUgly(1));




////////////////////////////////////////////////Missing Number///////////////////////////////////////////
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
// Example 4:
// Input: nums = [0]
// Output: 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let sum = 0, total = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        total += i + 1;
    }
    return total - sum;
};

// console.log(missingNumber([3,0,1]));
// console.log(missingNumber([0,1]));
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
// console.log(missingNumber([0]));




////////////////////////////////////////////////First Bad Version///////////////////////////////////////////
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your
// product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the
// first bad version. You should minimize the number of calls to the API.
// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:
// Input: n = 1, bad = 1
// Output: 1
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let r = n, l = 0;
        while(l <= r){
            let mid = Math.floor((l + r) / 2);
            let version = isBadVersion(mid);
            if(version !== isBadVersion(mid + 1)){
                return mid + 1
            }else if(version === false){
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
    };
};




////////////////////////////////////////////////Move Zeroes///////////////////////////////////////////
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let move = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            move = ++move;
        }else {
            nums[i - move] = nums[i];
        }
    }
    return nums.fill(0,nums.length - move, nums.length);
};

// console.log(moveZeroes([0,1,0,3,12]));
// console.log(moveZeroes([0]));




////////////////////////////////////////////////Word Pattern///////////////////////////////////////////
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    if (pattern === '' || s === '') return false;
    const str = s.split(' ');
    if (str.length !== pattern.length) return false;
    let pth = {}, word = {};
    for (let i = 0; i < str.length; i++) {
        if (!pth.hasOwnProperty(pattern[i]) && !word[str[i]]) {
            pth[pattern[i]] = str[i];
            word[str[i]] = true;
        } else {
            if (pth[pattern[i]] !== str[i]) {
                return false;
            }
        }
    }
    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog dog dog dog"));




////////////////////////////////////////////////Nim Game///////////////////////////////////////////
// You are playing the following Nim Game with your friend:
// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.
// Example 1:
// Input: n = 4
// Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// In all outcomes, your friend wins.
// Example 2:
// Input: n = 1
// Output: true
// Example 3:
// Input: n = 2
// Output: true
/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
    return n % 4 > 0;
};

// console.log(canWinNim(4));
// console.log(canWinNim(1));
// console.log(canWinNim(2));




////////////////////////////////////////////////Range Sum Query - Immutable///////////////////////////////////////////
// Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:
// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
// Example 1:
// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]
// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    this.sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.sums.push(sum);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */




////////////////////////////////////////////////Power of Three///////////////////////////////////////////
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// Example 1:
// Input: n = 27
// Output: true
// Example 2:
// Input: n = 0
// Output: false
// Example 3:
// Input: n = 9
// Output: true
// Example 4:
// Input: n = 45
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if(n === 3 || n === 1) return true;
    if(n < 3) return false;

    return isPowerOfThree(n / 3);
};

// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(45));




////////////////////////////////////////////////Counting Bits///////////////////////////////////////////
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
// Constraints:
// 0 <= n <= 105
// Follow up:
// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    let res = [];
    for (let i = 0; i <= n; i++)
        // remove 0 from bits
        res.push(Number(i).toString(2).replace(/0/g, '').length);
    return res;
};

// console.log(countBits(2));
// console.log(countBits(5));




////////////////////////////////////////////////Power of Four///////////////////////////////////////////
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.
// Example 1:
// Input: n = 16
// Output: true
// Example 2:
// Input: n = 5
// Output: false
// Example 3:
// Input: n = 1
// Output: true
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    if(n === 4 || n === 1) return true;
    if(n < 4) return false;

    return isPowerOfFour(n / 4);
};

// console.log(isPowerOfFour(16));
// console.log(isPowerOfFour(5));
// console.log(isPowerOfFour(1));




////////////////////////////////////////////////Power of Four///////////////////////////////////////////
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    return s.reverse();
};

// console.log(reverseString(["h","e","l","l","o"]));
// console.log(reverseString(["H","a","n","n","a","h"]));




////////////////////////////////////////////////Reverse Vowels of a String///////////////////////////////////////////
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
// Example 1:
// Input: s = "hello"
// Output: "holle"
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let right = s.length - 1, left = 0, result = s.split('');
    while (left < right) {
        const leftChar = result[left].toLowerCase(), rightChar = result[right].toLowerCase()
        if (!vowels.has(leftChar)) left++;
        if (!vowels.has(rightChar)) right--;
        if (vowels.has(leftChar) && vowels.has(rightChar)) {
            [result[right], result[left]] = [result[left], result[right]]
            left++;
            right--;
        }
    }

    return result.join('');
};

// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"));




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




////////////////////////////////////////////////Intersection of Two Arrays II///////////////////////////////////////////
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear
// as many times as it shows in both arrays and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    let res = nums1;
    res = res.filter(n => {
        let l = nums2.length;
        if (nums2.includes(n)) {
            nums2.splice(nums2.indexOf(n), 1);
        }
        return l > nums2.length;
    })
    return res;
};

// console.log(intersect([1,2,2,1],[2,2]));
// console.log(intersect([4,9,5],[9,4,9,8,4]));




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
























