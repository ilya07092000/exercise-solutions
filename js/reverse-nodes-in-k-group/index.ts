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

const getListLength = (head: ListNode | null) => {
  if (!head) {
    return 0;
  }

  let length = 0;
  let node = head;

  while (node) {
    node = node.next;
    length += 1;
  }

  return length;
};

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (k === 1) {
    return head;
  }

  const listLength = getListLength(head);

  let currNode = head;
  let currNodeIndex = 0;
  let prevCycleStart;
  let prevCycleEnd;

  while (currNodeIndex + k <= listLength) {
    let prevNode;
    let currCycleStart;
    let currCycleEnd;

    for (let i = 1; i <= k; i += 1) {
      if (i === 1) {
        currCycleStart = currNode;
      }

      if (i === k) {
        currCycleEnd = currNode;
      }

      let nodeToUpdate = currNode;

      if (!nodeToUpdate) {
        return head;
      }

      currNode = currNode.next;

      if (prevNode) {
        nodeToUpdate.next = prevNode;
      }

      prevNode = nodeToUpdate;
      currNodeIndex += 1;
    }

    if (prevCycleStart) {
      prevCycleStart.next = currCycleEnd;
    } else {
      head = currCycleEnd;
    }

    currCycleStart.next = currNode;

    prevCycleStart = currCycleStart;
    prevCycleEnd = currCycleEnd;
  }

  return head;
}
