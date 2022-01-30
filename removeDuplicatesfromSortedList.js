//////////////////////////////////////////////Remove Duplicates from Sorted List///////////////////////////////////////////////////
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Example 1:
//
// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:
//
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
// Constraints:
//
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
// function ListNode(val, next) {
//      this.val = (val === undefined ? 0 : val)
//      this.next = (next === undefined ? null : next)
// }

const deleteDuplicates = function(head) {
    if (head == null) return head;

    let curr = head;

    while (curr.next != null){
        if (curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }

    return head;
};

// console.log(deleteDuplicates([1,1,2]));
// console.log(deleteDuplicates([1,1,2,3,3]));