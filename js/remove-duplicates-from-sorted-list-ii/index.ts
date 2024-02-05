/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // store node where duplication was occured firstly
  let startDuplicateNode = null;
  // store previous node to duplication node
  let prevDuplicateNode = head;
  let node = head;

  while (node?.next) {
    while (node.val === node?.next?.val) {
      if (startDuplicateNode === null) {
        startDuplicateNode = node;
      }
      node = node.next;
    }

    if (startDuplicateNode !== null) {
      // rewrite head if duplication was started at the top of the list
      if (startDuplicateNode === head) {
        head = node.next;
      } else if (node?.next) {
        prevDuplicateNode.next = node.next;
      } else {
        prevDuplicateNode.next = null;
      }

      startDuplicateNode = null;
      node = prevDuplicateNode;
    } else {
      prevDuplicateNode = node;
      node = node?.next;
    }
  }

  return head;
}
