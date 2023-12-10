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
	const arr = traverseTree(root);

	const left = arr[1] ? `(${traverseArray(arr[1])})` : '';
	const right = arr[2] ? `(${traverseArray(arr[2])})` : '';

	const result = `${arr[0]}${left}${right}`;

	return result;
}

const traverseArray = (arr) => {
	let str = '';

	arr.forEach((item) => {
		if (Array.isArray(item)) {
			str += '(';
			str += traverseArray(item);
			str += ')';
		} else {
			str += item;
		}
	});

	return str;
};

const traverseTree = (node: TreeNode, arr = []) => {
	if (!node) {
		return;
	}

	arr.push(node.val);

	const left = [];
	const right = [];

	if (node.left) {
		arr.push(left);

		traverseTree(node.left, left);
	}

	if (node.right) {
		if (!node.left) {
			arr.push(left);
		}

		arr.push(right);
		traverseTree(node.right, right);
	}

	return arr;
};
