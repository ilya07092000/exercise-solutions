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

function middleNode(head: ListNode | null): ListNode | null {
  const nodesMap = {};

  let length = 0;
  let currNode = head;

  while (currNode) {
    nodesMap[length] = currNode;

    length += 1;
    currNode = currNode.next;
  }

  let middle = Math.ceil(length / 2);
  if (length % 2 === 0) {
    middle += 1;
  }

  return nodesMap[middle - 1];
}
