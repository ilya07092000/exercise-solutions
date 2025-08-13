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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const traverse = (currentInorder: number[]) => {
    if (currentInorder.length) {
      const nodeValue = postorder.pop();
      const inorderIndex = currentInorder.indexOf(nodeValue);

      const node = new TreeNode(nodeValue);

      node.right = traverse(currentInorder.slice(inorderIndex + 1));
      node.left = traverse(currentInorder.slice(0, inorderIndex));

      return node;
    }

    return null;
  };

  return traverse(inorder);
}
