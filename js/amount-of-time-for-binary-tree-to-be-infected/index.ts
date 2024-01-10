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

function amountOfTime(root: TreeNode | null, start: number): number {
	const adjMatrix = convertTreeToGraph(root);
	// track visited vertexes in order not to visit them again
	const visited = {};
	const queue = [start];
	let result = 0;

	while (queue.length) {
		// traverse through all elements in queue,
		// it means that we go throught elements on the same level
		let vertexAmount = queue.length;
		for (let i = 0; i < vertexAmount; i += 1) {
			// get vertex and mark it as visited
			const vertex = queue.shift();
			visited[vertex] = true;

			// get all path for this vertex and map them
			const vertexPaths = adjMatrix[vertex];
			vertexPaths.forEach((nextVertex) => {
				if (!visited?.[nextVertex]) {
					queue.push(nextVertex);
				}
			});
		}
		// increase result after we passed all elements on the current level
		result += 1;
	}

	/**
	 * as a result we return deepest level in our graph(adj matrix representation)
	 */
	return result - 1;
}

/**
 * convert BST to adj matrix
 */
const convertTreeToGraph = (node) => {
	const adjMatrix = {};
	const queue = [node];

	while (queue.length) {
		const nextNode = queue.shift();
		adjMatrix[nextNode.val] = adjMatrix[nextNode.val] || [];

		if (nextNode.left) {
			// push left node to matrix
			adjMatrix[nextNode.val].push(nextNode.left.val);
			// push path from left node to prev node, since we want to get non oriented graph
			if (!adjMatrix[nextNode.left.val]) {
				adjMatrix[nextNode.left.val] = [];
			}
			adjMatrix[nextNode.left.val].push(nextNode.val);

			queue.push(nextNode.left);
		}

		if (nextNode.right) {
			// push right node to matrix
			adjMatrix[nextNode.val].push(nextNode.right.val);
			// push path from right node to prev node, since we want to get non oriented graph
			if (!adjMatrix[nextNode.right.val]) {
				adjMatrix[nextNode.right.val] = [];
			}
			adjMatrix[nextNode.right.val].push(nextNode.val);

			queue.push(nextNode.right);
		}
	}

	return adjMatrix;
};
