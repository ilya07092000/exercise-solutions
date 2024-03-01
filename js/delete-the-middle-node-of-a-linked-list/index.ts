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

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let slowPointer = head;
  let fastPointer = head;
  let prevPointer = null;

  while (fastPointer?.next) {
    prevPointer = slowPointer;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer?.next?.next;
  }

  prevPointer.next = slowPointer.next;

  return head;
}
