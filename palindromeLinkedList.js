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