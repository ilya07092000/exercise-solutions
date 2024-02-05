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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  let position = 1;

  if (!head.next || left === right) {
    return head;
  }

  // store current node
  let node = head;
  // save previous node of the chain or head if position === 1
  let startNode = head;
  while (position !== left) {
    startNode = node;
    node = node.next;
    position += 1;

    if (!node) {
      return head;
    }
  }

  // we use three nodes to reverse the list
  // prevNode, node, nextNode.
  // so we just change the reference from node->nextNode to node->prevNode;
  let prevNode = null;
  let nextNode = null;
  while (position !== right) {
    prevNode = node;
    node = nextNode || node.next;
    nextNode = node.next;

    node.next = prevNode;
    position += 1;

    if (!node) {
      return head;
    }
  }

  // if we reverse node from the position 1(head), we need to cnange the head pointer then
  if (left === 1) {
    head.next = nextNode;
    head = node;
  } else {
    // otherwise we change pointer of startNode.next to the last node of the chain(right) and
    // change the pointer of first node of the chain(left) to the next node after last one
    startNode.next.next = nextNode;
    startNode.next = node;
  }

  return head;
}
