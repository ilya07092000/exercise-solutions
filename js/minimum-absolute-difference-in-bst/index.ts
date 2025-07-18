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

function getMinimumDifference(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let result = Number.MAX_SAFE_INTEGER;
  let prev = null;

  const traverse = (node: TreeNode) => {
    if (node.left) {
      traverse(node.left);
    }

    const val = Math.abs(node.val);

    if (prev !== null) {
      result = Math.min(Math.abs(val - prev), result);
    }

    prev = val;

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
}
