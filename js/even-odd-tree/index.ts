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

function isEvenOddTree(root: TreeNode | null): boolean {
  if (root?.val % 2 === 0) {
    return false;
  }

  let stack = [[root]];
  let level = 0;

  while (stack.length) {
    const nodes = stack.pop();

    /**
          Check the order of elements corresponding to the level value
       */
    if (level !== 0) {
      for (let i = 0; i < nodes.length - 1; i += 1) {
        if (level % 2 !== 0 && nodes[i].val <= nodes[i + 1].val) {
          return false;
        } else if (level % 2 === 0 && nodes[i].val >= nodes[i + 1].val) {
          return false;
        }
      }
    }

    const nextLevelNodes = [];
    for (let i = 0; i < nodes.length; i += 1) {
      const n = nodes[i];

      if (n.left) {
        if (!isSuitableForTheLevel(level + 1, n.left.val)) {
          return false;
        }

        nextLevelNodes.push(n.left);
      }

      if (n.right) {
        if (!isSuitableForTheLevel(level + 1, n.right.val)) {
          return false;
        }

        nextLevelNodes.push(n.right);
      }
    }

    if (nextLevelNodes.length) {
      stack.push(nextLevelNodes);
      level += 1;
    }
  }

  return true;
}

const isSuitableForTheLevel = (level, val) => {
  if (
    (level % 2 === 0 && val % 2 === 0) ||
    (level % 2 !== 0 && val % 2 !== 0)
  ) {
    return false;
  }

  return true;
};
