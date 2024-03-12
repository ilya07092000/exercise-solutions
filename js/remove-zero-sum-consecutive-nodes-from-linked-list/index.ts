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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let currNode = head;

  const array = [];
  while (currNode) {
    array.push(currNode.val);
    currNode = currNode.next;
  }

  let hasZeroSum = true;
  while (hasZeroSum) {
    hasZeroSum = false;

    outer: for (let i = 0; i < array.length; i += 1) {
      let sum = 0;
      for (let j = i; j < array.length; j += 1) {
        sum += array[j];

        if (sum === 0) {
          hasZeroSum = true;
          array.splice(i, j - i + 1);
          break outer;
        }
      }
    }
  }

  if (!array.length) {
    return null;
  }

  let newHead = new ListNode(array[0]);
  let lastNode = newHead;

  for (let i = 1; i < array.length; i += 1) {
    let newNode = new ListNode(array[i]);
    lastNode.next = newNode;
    lastNode = newNode;
  }

  return newHead;
}
