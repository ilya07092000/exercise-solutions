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

function pseudoPalindromicPaths(root: TreeNode | null): number {
  let result = 0;

  const traverse = (node, path) => {
    if (node.left) {
      if (!set.has(node.left.val)) {
        set.add(node.left.val);
      } else {
        set.delete(node.left.val);
      }

      traverse(node.left, path);

      if (set.has(node.left.val)) {
        set.delete(node.left.val);
      } else {
        set.add(node.left.val);
      }
    }

    if (node.right) {
      if (!set.has(node.right.val)) {
        set.add(node.right.val);
      } else {
        set.delete(node.right.val);
      }

      traverse(node.right, path);

      if (set.has(node.right.val)) {
        set.delete(node.right.val);
      } else {
        set.add(node.right.val);
      }
    }

    if (!node.right && !node.left && set.size <= 1) {
      result += 1;
    }
  };

  const set = new Set();
  set.add(root.val);
  traverse(root, set);

  return result;
}
