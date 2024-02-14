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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const valuesByLevels = [];
  const stack = [[root]];

  while (stack.length) {
    const level = stack.pop();
    const sumLevelValues = level.reduce((acc, n) => acc + n.val, 0);

    valuesByLevels.push(sumLevelValues / level.length);

    const children = [];
    level.map(n => {
      if (n.left) {
        children.push(n.left);
      }

      if (n.right) {
        children.push(n.right);
      }
    });

    if (children.length) {
      stack.push(children);
    }
  }

  return valuesByLevels;
}
