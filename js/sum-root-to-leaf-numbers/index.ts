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

function sumNumbers(root: TreeNode | null): number {
  let result = 0;

  const traverse = (node, sum) => {
    if (node.right) {
      traverse(node.right, sum + node.right.val);
    }

    if (node.left) {
      traverse(node.left, sum + node.left.val);
    }

    if (!node.right && !node.left) {
      result += +sum;
    }
  };

  traverse(root, String(root.val));
  return result;
}
