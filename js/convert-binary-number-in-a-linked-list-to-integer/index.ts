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

const getLength = (head: ListNode) => {
  let result = 1;
  let node = head;

  while (node.next) {
    node = node.next;
    result += 1;
  }

  return result;
};

function getDecimalValue(head: ListNode | null): number {
  if (!head) {
    return null;
  }

  const length = getLength(head);

  let index = 0;
  let result = 0;

  let node = head;

  while (node) {
    if (node.val === 1) {
      result += Math.pow(2, length - index - 1);
    }

    index += 1;
    node = node.next;
  }

  return result;
}
