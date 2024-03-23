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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let item = head;
  let prev = null;
  let next = item.next;

  while (item) {
    item.next = prev;
    prev = item;
    item = next;
    next = item?.next;
  }

  return prev;
}
