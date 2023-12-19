/**
 * in my solution we move only to bottom and right,
 * spreading from the left top corner tor right bottom one
 */

function imageSmoother(img: number[][]): number[][] {
	// create array inside each cell and add own value to index 0
	const imgSiblingCells: number[][][] = img.map((row) =>
		row.map((cell) => [cell])
	);

	const rows = img.length;
	const cols = img[0].length;

	for (let rowNum = 0; rowNum < imgSiblingCells.length; rowNum += 1) {
		const row = imgSiblingCells[rowNum];

		for (let colNum = 0; colNum < row.length; colNum += 1) {
			const cell = row[colNum];

			// get next(right) col index
			const rightColIdx = colNum + 1 > cols - 1 ? null : colNum + 1;
			// get next(bottom col idx)
			const bottomRowIdx = rowNum + 1 > rows - 1 ? null : rowNum + 1;

			if (rightColIdx !== null) {
				// identify start horizontal idx
				const colStartIdx = rowNum - 1 < 0 ? 0 : rowNum - 1;
				// identify end horizontal idx
				const colEndIdx = rowNum + 1 > rows - 1 ? rows - 1 : rowNum + 1;

				for (let i = colStartIdx; i <= colEndIdx; i += 1) {
					// push cells which we visited to curr cell
					cell.push(imgSiblingCells[i][rightColIdx][0]);
					// push curr cell to cells which we visited
					imgSiblingCells[i][rightColIdx].push(cell[0]);
				}
			}

			if (bottomRowIdx !== null) {
				// just push only one bottom cell,
				// because we already pushed next(right) and previous(left) columns cells,
				// as well as top cell
				cell.push(imgSiblingCells[bottomRowIdx][colNum][0]);
				imgSiblingCells[bottomRowIdx][colNum].push(cell[0]);
			}
		}
	}

	// calculate result
	const result = imgSiblingCells.map((rows) =>
		rows.map((cell) =>
			Math.floor(cell.reduce((acc, curr) => acc + curr, 0) / cell.length)
		)
	);

	return result;
}

console.log(
	imageSmoother([
		[2, 3, 4],
		[5, 6, 7],
		[8, 9, 10],
		[11, 12, 13],
		[14, 15, 16],
	])
);
