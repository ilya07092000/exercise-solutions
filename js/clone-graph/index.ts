/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const nodesMap = new Map();
  nodesMap.set(node, new Node(node.val));
  const stack = [node];

  while (stack.length) {
    const originalNode = stack.pop();
    const nodeCopy = nodesMap.get(originalNode);

    nodeCopy.neighbors = originalNode.neighbors.map(n => {
      if (!nodesMap.has(n)) {
        stack.push(n);
        nodesMap.set(n, new Node(n.val));
      }
      return nodesMap.get(n);
    });
  }

  return nodesMap.get(node);
}
