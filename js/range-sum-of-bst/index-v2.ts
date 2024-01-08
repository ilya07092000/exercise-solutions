/**
 * Breadth-first Search
 */

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
	const queue = [root];
	const values = [];

	while (queue.length) {
		const node = queue.shift();

		if (node.val >= low && node.val <= high) {
			values.push(node.val);
		}

		if (node.right) {
			queue.push(node.right);
		}

		if (node.left) {
			queue.push(node.left);
		}
	}

	return values.reduce((acc, curr) => acc + curr, 0);
}
