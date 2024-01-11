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

function maxAncestorDiff(root: TreeNode | null): number {
	return traverse(root);
}

/**
 * traverse each subtree and find the max difference between two nodes
 */
const traverse = (node): number => {
	const outerStack = [node];
	let diff = 0;

	while (outerStack.length) {
		const innerStack = [];
		const subtreeRootNode = outerStack.pop();

		if (subtreeRootNode.right) {
			outerStack.push(subtreeRootNode.right);
			innerStack.push(subtreeRootNode.right);
		}

		if (subtreeRootNode.left) {
			outerStack.push(subtreeRootNode.left);
			innerStack.push(subtreeRootNode.left);
		}

		while (innerStack.length) {
			let nextNode = innerStack.pop();

			if (nextNode.right) {
				innerStack.push(nextNode.right);
			}

			if (nextNode.left) {
				innerStack.push(nextNode.left);
			}

			diff = Math.max(Math.abs(subtreeRootNode.val - nextNode.val), diff);
		}
	}

	return diff;
};
