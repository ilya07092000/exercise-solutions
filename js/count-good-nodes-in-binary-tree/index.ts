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

function goodNodes(root: TreeNode | null): number {
  let result = 0;

  const traverse = (node, max) => {
    if (node.val >= max) {
      result += 1;
    }

    if (node.left) {
      traverse(node.left, Math.max(node.val, max));
    }

    if (node.right) {
      traverse(node.right, Math.max(node.val, max));
    }
  };

  traverse(root, root.val);
  return result;
}
