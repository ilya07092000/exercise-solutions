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

function invertTree(root: TreeNode | null): TreeNode | null {
  const traverse = node => {
    const temp = node?.right;
    node.right = node?.left;
    node.left = temp;

    if (node.right) {
      traverse(node.right);
    }

    if (node.left) {
      traverse(node.left);
    }
  };

  if (root) {
    traverse(root);
  }
  return root;
}
