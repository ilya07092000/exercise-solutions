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

  const stack = [[root]];
  let level = 0;

  while (stack.length) {
    const levelNodes = stack.pop();
    const nextLevelNodes = [];
    result[level] = [];

    levelNodes.forEach(n => {
      result[level].push(n.val);

      if (n.left) {
        nextLevelNodes.push(n.left);
      }

      if (n.right) {
        nextLevelNodes.push(n.right);
      }
    });

    level += 1;
    if (nextLevelNodes.length) {
      stack.push(nextLevelNodes);
    }
  }

  return result;
}

export {};
