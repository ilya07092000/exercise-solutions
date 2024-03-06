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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let firstEvenNode = head.next;

  let oddNode = head;
  let evenNode = head.next;

  while (oddNode?.next?.next || evenNode?.next?.next) {
    if (oddNode?.next?.next) {
      oddNode.next = oddNode.next.next;
      oddNode = oddNode.next;
    }

    if (evenNode?.next?.next) {
      evenNode.next = evenNode.next.next;
      evenNode = evenNode.next;
    }
  }

  oddNode.next = firstEvenNode;
  evenNode.next = null;

  return head;
}
