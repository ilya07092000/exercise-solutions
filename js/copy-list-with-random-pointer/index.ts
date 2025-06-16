/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  const originalToCopiedNodeMap = new Map();

  let copiedList = null;

  let currentCopiedNode = copiedList;
  let currentOriginalNode = head;

  while (currentOriginalNode) {
    if (!copiedList) {
      copiedList = new Node(currentOriginalNode.val);
      currentCopiedNode = copiedList;
    } else {
      currentCopiedNode.next = new Node(currentOriginalNode.val);
      currentCopiedNode = currentCopiedNode.next;
    }

    originalToCopiedNodeMap.set(currentOriginalNode, currentCopiedNode);

    currentOriginalNode = currentOriginalNode.next;
  }

  let currentNode = head;

  while (currentNode) {
    const originalRandomNode = currentNode.random;

    if (originalRandomNode) {
      const copiedRandomNode = originalToCopiedNodeMap.get(originalRandomNode);
      const currentNodeCopy = originalToCopiedNodeMap.get(currentNode);

      if (currentNodeCopy) {
        currentNodeCopy.random = copiedRandomNode;
      }
    }

    currentNode = currentNode.next;
  }

  return copiedList;
}
