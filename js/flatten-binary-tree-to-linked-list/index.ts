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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  const values = [];

  const traverse = node => {
    values.push(node.val);

    if (node.left) {
      traverse(node.left);
    }

    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(root);
  root.left = null;
  root.right = null;

  let node = root;
  for (let i = 1; i < values.length; i += 1) {
    node.right = new TreeNode(values[i]);
    node = node.right;
  }
}
