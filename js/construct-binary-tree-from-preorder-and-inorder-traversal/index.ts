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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const traverse = currentInorder => {
    if (currentInorder.length) {
      const value = preorder.shift();
      const valueIndex = currentInorder.indexOf(value);

      const node = new TreeNode(value);

      node.left = traverse(currentInorder.slice(0, valueIndex));
      node.right = traverse(currentInorder.slice(valueIndex + 1));

      return node;
    }

    return null;
  };

  return traverse(inorder);
}
