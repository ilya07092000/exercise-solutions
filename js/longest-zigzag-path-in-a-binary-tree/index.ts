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

function longestZigZag(root: TreeNode | null): number {
  let result = 0;
  const traverse = (
    node,
    type: 'root' | 'left' | 'right',
    score: number = 1,
  ) => {
    result = Math.max(result, score - 1);

    if (type === 'root') {
      if (node.right) {
        traverse(node.right, 'right', score + 1);
      }

      if (node.left) {
        traverse(node.left, 'left', score + 1);
      }
    }

    if (type === 'right') {
      if (node?.left) {
        traverse(node.left, 'left', score + 1);
      }

      if (node?.right) {
        traverse(node.right, 'right', 2);
      }
    }

    if (type === 'left') {
      if (node?.right) {
        traverse(node.right, 'right', score + 1);
      }

      if (node?.left) {
        traverse(node.left, 'left', 2);
      }
    }
  };

  traverse(root, 'root', 1);
  return result;
}
