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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  let prevValue = null;

  const traverse = (node: TreeNode) => {
    const leftNodeValue = node.left ? traverse(node.left) : null;

    if (prevValue === null) {
      prevValue = node.val;
    } else if (node.val > prevValue) {
      prevValue = node.val;
    } else {
      return false;
    }

    const rightNodeValue = node.right ? traverse(node.right) : null;

    if (leftNodeValue === false || rightNodeValue === false) {
      return false;
    }

    return true;
  };

  return traverse(root);
}
