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

const getIndexOfGreaterNode = (head: ListNode, x: number) => {
  let node = head;
  let index = 0;

  while (node.next) {
    if (node.val >= x) {
      return {
        index,
        isLast: false,
      };
    }

    node = node.next;
    index += 1;
  }

  return {
    index,
    isLast: true,
  };
};

const getPartitionItem = (head: ListNode, x: number) => {
  if (head.val >= x) {
    return {
      node: null,
      isLast: false,
    };
  }

  let node = head;

  while (node.next) {
    if (node.next.val >= x) {
      return {
        node,
        isLast: false,
      };
    }

    node = node.next;
  }

  return {
    node,
    isLast: true,
  };
};

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let {node: partitionNode, isLast: isLastNode} = getPartitionItem(head, x);
  const {index, isLast: isLastIndex} = getIndexOfGreaterNode(head, x);

  let currentNode = head;
  let prev = null;
  let currentIndex = 0;

  while (currentNode) {
    if (currentNode.val < x && currentIndex > index) {
      if (!partitionNode) {
        let headCopy = head;
        head = currentNode;
        prev.next = currentNode.next;
        currentNode.next = headCopy;

        partitionNode = head;
      } else {
        prev.next = currentNode.next;
        currentNode.next = partitionNode.next;
        partitionNode.next = currentNode;

        partitionNode = currentNode;
      }
    }

    currentIndex += 1;
    prev = currentNode;
    currentNode = currentNode.next;
  }

  return head;
}
