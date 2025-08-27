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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root) {
    return null;
  }

  const traverse = (node: TreeNode | null) => {
    if (node) {
      let currentDescendant = false;

      if (node === p || node === q) {
        currentDescendant = true;
      }

      const leftResult = traverse(node.left);
      const rightResult = traverse(node.right);

      if (currentDescendant && (leftResult || rightResult)) {
        return node;
      } else if (leftResult && rightResult) {
        return node;
      }

      return currentDescendant || leftResult || rightResult;
    }

    return false;
  };

  return traverse(root);
}
