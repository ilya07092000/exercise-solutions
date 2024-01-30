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

function maxDepth(root: TreeNode | null): number {
  let result = 0;

  const traverse = (node, depth) => {
    if (node.right) {
      traverse(node.right, depth + 1);
    }

    if (node.left) {
      traverse(node.left, depth + 1);
    }

    result = Math.max(result, depth);
  };

  if (root) {
    traverse(root, 1);
  }

  return result;
}
