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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stack = [[p, q]];

  while (stack.length) {
    const [node1, node2] = stack.pop();

    if (node1?.val !== node2?.val) {
      return false;
    }

    if (node1?.left || node2?.left) {
      stack.push([node1.left, node2.left]);
    }

    if (node1?.right || node2?.right) {
      stack.push([node1.right, node2.right]);
    }
  }

  return true;
}
