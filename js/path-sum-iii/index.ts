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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let result = 0;

  const traverse = (node, sum = 0, innerNode = false) => {
    if (sum === targetSum) {
      result += 1;
    }

    if (node.left) {
      traverse(node.left, sum + node.left.val, true);
      if (!innerNode) {
        traverse(node.left, node.left.val);
      }
      if (node.left.val <= targetSum && !innerNode) {
      }
    }

    if (node.right) {
      traverse(node.right, sum + node.right.val, true);
      if (!innerNode) {
        traverse(node.right, node.right.val);
      }
    }
  };

  if (root) {
    traverse(root, root.val);
  }

  return result;
}
