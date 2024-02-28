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

function findBottomLeftValue(root: TreeNode | null): number {
  const stack = [[root]];
  const nodesByLevels = [];
  let level = 0;

  while (stack.length) {
    const levelNodes = stack.pop();
    nodesByLevels[level] = levelNodes;

    const nextLevelNodes = [];
    levelNodes.forEach(node => {
      if (node.left) {
        nextLevelNodes.push(node.left);
      }

      if (node.right) {
        nextLevelNodes.push(node.right);
      }
    });

    if (nextLevelNodes.length) {
      stack.push(nextLevelNodes);
    }
    level += 1;
  }

  return nodesByLevels[nodesByLevels.length - 1][0].val;
}
