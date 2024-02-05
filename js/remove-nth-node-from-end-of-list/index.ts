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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head?.next && n > 0) {
    return null;
  }

  let pointer1 = head;
  let pointer2 = head;
  let prev = null;

  for (let i = 1; i < n; i += 1) {
    pointer2 = pointer2.next;
  }

  while (pointer2?.next) {
    prev = pointer1;
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
  }

  if (+n === 1) {
    prev.next = null;
  } else if (prev) {
    prev.next = pointer1.next;
  } else {
    head = head.next;
  }

  return head;
}
