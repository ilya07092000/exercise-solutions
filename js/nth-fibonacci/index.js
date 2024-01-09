/**
 *                         6
 *                      /     \
 *                     5        4
 *                 /      \      / \
 *                4        3    3    2
 *               /   \    / \   / \  / \
 *              3     2   2  1  2 1  1 0
 *             / \   / \  /\   / \
 *            2   1  1  0 1 0  1  0
 *           /\
 *          1  0
 */

/**
 * recursion approach
 * O(2^n)
 */
function fibRec(n) {
	if (n <= 1) {
		return n;
	}

	// returns {(n-1) number} + {(n-2) number} = nth number of fibonacci
	return fibRec(n - 1) + fibRec(n - 2);
}

console.log('/** recursion ***/');
console.log('result: ', fibRec(5));
console.log('result: ', fibRec(10));
console.log('result: ', fibRec(15));
console.log('result: ', fibRec(20));

/**
 * dynamic programming approach
 */
console.log('/** dynamic ***/');
function fib(n) {
	const sequence = [];
	sequence[0] = 1;
	sequence[1] = 1;

	for (let i = 1; i < n - 1; i += 1) {
		sequence.push(sequence[i - 1] + sequence[i]);
	}

	return sequence[n - 1];
}
console.log('result: ', fib(5));
console.log('result: ', fib(10));
console.log('result: ', fib(15));
console.log('result: ', fib(20));
