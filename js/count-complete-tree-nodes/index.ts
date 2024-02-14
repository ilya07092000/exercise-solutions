/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  const stack = [[root]];
  let result = 0;

  while (stack.length) {
    const nodes = stack.pop();
    result += nodes.length;

    let nextLevelNodes = [];

    for (let i = 0; i < nodes.length; i += 1) {
      const currNode = nodes[i];
      if (currNode.right) {
        nextLevelNodes.push(currNode.right);
      }

      if (currNode.left) {
        nextLevelNodes.push(currNode.left);
      }
    }

    if (nextLevelNodes.length) {
      stack.push(nextLevelNodes);
    }
  }

  return result;
}
