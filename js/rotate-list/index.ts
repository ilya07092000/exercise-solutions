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
  let node = head;
  let length = 1;

  while (node.next) {
    node = node.next;
    length += 1;
  }

  return length;
};

const getTail = (head: ListNode) => {
  let tail = head.next;
  let tailPrev = head;

  while (tail.next) {
    tail = tail.next;
    tailPrev = tailPrev.next;
  }

  return {tail, tailPrev};
};

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  const length = getLength(head);

  for (let i = 1; i <= k % length; i += 1) {
    const {tail, tailPrev} = getTail(head);

    tailPrev.next = null;
    tail.next = head;
    head = tail;
  }

  return head;
}
