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

function rightSideView(root: TreeNode | null): number[] {
  const result = [];
  if (!root) {
    return result;
  }

  const stack = [[root]];

  while (stack.length) {
    const nodes = stack.pop();

    const nextLevelNodes = nodes.reduce((acc, n) => {
      if (n.left) {
        acc.push(n.left);
      }

      if (n.right) {
        acc.push(n.right);
      }

      return acc;
    }, []);

    if (nextLevelNodes.length) {
      stack.push(nextLevelNodes);
    }

    /**
     * we iterate through each level, map all nodes from left to right,
     * so the most right node will be visible from the right side
     */
    result.push(nodes[nodes.length - 1].val);
  }

  return result;
}
