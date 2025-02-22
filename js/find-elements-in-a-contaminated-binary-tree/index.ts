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

const getValueForNodeWithLeftParent = (value: number) => {
  return 2 * value + 1;
};

const getValueForNodeWithRightParent = (value: number) => {
  return 2 * value + 2;
};

const getRecoveredTreeSet = (root: TreeNode | null) => {
  const set = new Set<number>();

  if (!root) {
    return set;
  }

  const stack = [
    {node: root, hasLeftParent: false, hasRightParent: false, parentValue: 0},
  ];

  while (stack.length) {
    const {node, hasLeftParent, hasRightParent, parentValue} = stack.pop();
    let nodeVal = node.val;

    if (node === root) {
      nodeVal = 0;
    }

    if (hasLeftParent || hasRightParent) {
      nodeVal = hasLeftParent
        ? getValueForNodeWithLeftParent(parentValue)
        : getValueForNodeWithRightParent(parentValue);
    }

    set.add(nodeVal);

    if (node.right) {
      stack.push({
        node: node.right,
        hasLeftParent: false,
        hasRightParent: true,
        parentValue: nodeVal,
      });
    }

    if (node.left) {
      stack.push({
        node: node.left,
        hasLeftParent: true,
        hasRightParent: false,
        parentValue: nodeVal,
      });
    }
  }

  return set;
};

class FindElements {
  root: TreeNode | null;
  set: Set<number>;

  constructor(root: TreeNode | null) {
    this.root = root;
    this.set = getRecoveredTreeSet(root);
  }

  find(target: number): boolean {
    return this.set.has(target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
