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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
	const treeStack1 = [root1];
	const treeStack2 = [root2];

	const getLeaf = (stack) => {
		while (stack.length) {
			let node = stack.pop();

			if (node.right) {
				stack.push(node.right);
			}

			if (node.left) {
				stack.push(node.left);
			}

			if (!node.left && !node.right) {
				return node;
			}
		}

		return null;
	};

	let leaf1 = getLeaf(treeStack1);
	let leaf2 = getLeaf(treeStack2);

	while (leaf1 || leaf2) {
		if (leaf1?.val !== leaf2?.val) {
			return false;
		}

		leaf1 = getLeaf(treeStack1);
		leaf2 = getLeaf(treeStack2);
	}

	return true;
}
