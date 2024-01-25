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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let head = null;
  let lastNode = null;

  let l1Pointer = list1;
  let l2Pointer = list2;

  if (l1Pointer.val < l2Pointer.val) {
    head = l1Pointer;
    l1Pointer = l1Pointer.next;
  } else {
    head = l2Pointer;
    l2Pointer = l2Pointer.next;
  }
  lastNode = head;

  while (l1Pointer && l2Pointer) {
    if (l1Pointer.val > l2Pointer.val) {
      lastNode.next = l2Pointer;
      l2Pointer = l2Pointer.next;
    } else {
      lastNode.next = l1Pointer;
      l1Pointer = l1Pointer.next;
    }
    lastNode = lastNode.next;
  }

  if (l1Pointer) {
    lastNode.next = l1Pointer;
  }

  if (l2Pointer) {
    lastNode.next = l2Pointer;
  }

  return head;
}
