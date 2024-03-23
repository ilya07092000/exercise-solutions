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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return null;
  }

  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer?.next?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  slowPointer = slowPointer.next;
  const rightPartOfList = [];
  while (slowPointer) {
    rightPartOfList.push(slowPointer.val);
    slowPointer = slowPointer.next;
  }

  let leftItem = head;
  while (rightPartOfList.length) {
    if (leftItem.val !== rightPartOfList.pop()) {
      return false;
    }
    leftItem = leftItem.next;
  }

  return true;
}
