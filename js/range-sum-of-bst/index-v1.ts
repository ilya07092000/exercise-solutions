/**
 * Depth First Search
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
	const values = [];

	const traverse = (node) => {
		if (node.val >= low && node.val <= high) {
			values.push(node.val);
		}

		if (node.right) {
			traverse(node.right);
		}

		if (node.left) {
			traverse(node.left);
		}
	};

	traverse(root);

	return values.reduce((curr, acc) => acc + curr, 0);
}
