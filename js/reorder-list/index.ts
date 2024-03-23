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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer?.next?.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  const slowPointerNext = slowPointer.next;
  slowPointer.next = null;
  slowPointer = slowPointerNext;
  const stack = [];
  while (slowPointer) {
    stack.push(slowPointer);
    const pointerSave = slowPointer;
    slowPointer = slowPointer.next;
    pointerSave.next = null;
  }

  let currItem = head;
  while (stack.length) {
    const item = stack.pop();
    let currItemNext = currItem?.next;
    currItem.next = item;
    if (currItemNext) {
      item.next = currItemNext;
      currItem = currItemNext;
    }
  }
}
