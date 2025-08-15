/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null;
  }

  let level = [root];

  while (level.length) {
    const currentLevel = level;
    const nextLevel = [];

    currentLevel.forEach((node, index) => {
      const nextNode = currentLevel[index + 1] || null;

      node.next = nextNode;

      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    if (nextLevel.length) {
      level = nextLevel;
    } else {
      level = [];
    }
  }

  return root;
}
