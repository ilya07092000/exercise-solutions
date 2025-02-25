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

const getDividerForLevel = (level = 1) => '-'.repeat(level);

function recoverFromPreorder(traversal: string): TreeNode | null {
  if (!traversal) {
    return null;
  }

  const nodesByLevel = [];
  let index = 0;

  while (index < traversal.length) {
    let level = 0;

    while (traversal[index] === '-') {
      level += 1;
      index += 1;
    }

    let numberStr = '';

    while (!isNaN(Number(traversal[index]))) {
      numberStr += traversal[index];
      index += 1;
    }

    let number = Number(numberStr);

    const node = new TreeNode(number);

    nodesByLevel[level] = node;

    if (level > 0) {
      const parentNode = nodesByLevel[level - 1];

      if (parentNode) {
        if (!parentNode.left) {
          parentNode.left = node;
        } else if (!parentNode.right) {
          parentNode.right = node;
        }
      }
    }
  }

  return nodesByLevel[0];
}
