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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let maxDepth = 0;
  let ancestor = null;

  const dfs = (node, depth = 0) => {
    let leftDepth = depth;
    let rightDepth = depth;

    if (node.left) {
      leftDepth = dfs(node.left, depth + 1);
    }

    if (node.right) {
      rightDepth = dfs(node.right, depth + 1);
    }

    if (!ancestor || (leftDepth === rightDepth && leftDepth >= maxDepth)) {
      ancestor = node;
      maxDepth = leftDepth;
    }

    return Math.max(leftDepth, rightDepth);
  };

  dfs(root, 0);

  return ancestor;
}
