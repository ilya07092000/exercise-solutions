class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function tree2str(root: TreeNode | null): string {
	return traverseTree(root);
}

const traverseTree = (node: TreeNode) => {
	let result = '';

	if (!node) {
		return result;
	}

	result += node.val;

	if (node.left) {
		result += '(';
		result += traverseTree(node.left);
		result += ')';
	}

	if (node.right) {
		if (!node.left) {
			result += '()';
		}

		result += '(';
		result += traverseTree(node.right);
		result += ')';
	}

	return result;
};
