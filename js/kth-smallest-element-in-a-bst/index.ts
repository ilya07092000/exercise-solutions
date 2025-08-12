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

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  let counter = 0;

  const traverse = (node: TreeNode) => {
    let result;

    if (node.left) {
      result = traverse(node.left);
    }

    if (result !== undefined) {
      return result;
    }

    counter += 1;

    if (counter === k) {
      return node.val;
    }

    if (node.right) {
      result = traverse(node.right);
    }

    return result;
  };

  return traverse(root);
}
