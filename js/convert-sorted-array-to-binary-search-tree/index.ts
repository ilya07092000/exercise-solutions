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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);

  const leftArr = nums.slice(0, middle);
  if (leftArr.length) {
    root.left = constructTree(nums.slice(0, middle));
  }

  const rightArr = nums.slice(middle + 1);
  if (rightArr.length) {
    root.right = constructTree(nums.slice(middle + 1));
  }

  return root;
}

const constructTree = nums => {
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);

  const leftArr = nums.slice(0, middle);
  if (leftArr.length) {
    root.left = constructTree(leftArr);
  }

  const rightArr = nums.slice(middle + 1);
  if (rightArr.length) {
    root.right = constructTree(rightArr);
  }

  return root;
};
