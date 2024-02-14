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

function levelOrder(root: TreeNode | null): number[][] {
  const result = [];

  if (!root) {
    return result;
  }

  const traverse = (node, level) => {
    if (result[level]) {
      result[level].push(node.val);
    } else {
      result[level] = [node.val];
    }

    if (node.left) {
      traverse(node.left, level + 1);
    }

    if (node.right) {
      traverse(node.right, level + 1);
    }
  };

  traverse(root, 0);
  return result;
}
