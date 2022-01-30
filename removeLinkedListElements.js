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