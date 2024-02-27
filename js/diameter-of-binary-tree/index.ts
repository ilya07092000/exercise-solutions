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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;
  const subtrees = [root];

  while (subtrees.length) {
    const subtree = subtrees.pop();
    const currResult = getMaxPath(subtree);

    result = Math.max(currResult, result);

    if (subtree?.left) {
      subtrees.push(subtree?.left);
    }

    if (subtree?.right) {
      subtrees.push(subtree?.right);
    }
  }

  return result;
}

const getMaxPath = node => {
  let left = 0;
  let right = 0;

  if (node?.left) {
    left = traverse(node?.left, 1);
  }

  if (node?.right) {
    right = traverse(node?.right, 1);
  }

  return left + right;
};

const traverse = (node, depth) => {
  let maxLeft = 0;
  let maxRight = 0;

  if (node?.left) {
    maxLeft = traverse(node?.left, depth + 1);
  }

  if (node?.right) {
    maxRight = traverse(node?.right, depth + 1);
  }

  if (!node?.left && !node?.right) {
    return depth;
  }

  return Math.max(maxLeft, maxRight);
};

export {};
