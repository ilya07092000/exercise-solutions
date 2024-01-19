/**
 * "Seam carving" algorithm for DP.
 */

function minFallingPathSum(matrix: number[][]): number {
	let resultsList: number[] = [];

	// save value of first level
	for (let i = 0; i < matrix.length; i += 1) {
		resultsList.push(matrix[0][i]);
	}

	for (let row = 1; row < matrix.length; row += 1) {
		// temporary array in order to not mutate prev values
		let tempResultsList: number[] = [];
		for (let col = 0; col < matrix.length; col += 1) {
			const startIdx = col === 0 ? col : col - 1;
			const endIdx = col === matrix.length - 1 ? matrix.length - 1 : col + 1;

			// search for the min el in range of "col - 1 to col + 1"
			const aboveEls = resultsList.slice(startIdx, endIdx + 1);
			const minAboveEl = Math.min(...aboveEls);

			// save new result
			tempResultsList[col] = matrix[row][col] + minAboveEl;
		}
		// rewrite array
		resultsList = tempResultsList;
	}

	// return min sum
	return Math.min(...resultsList);
}
