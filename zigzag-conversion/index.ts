function convert(s: string, numRows: number): string {
	const resultArr: any[] = [];
	let letterNum = 0;
	// index of columns to which we should push all letters from top to bottom of the column
	let pushColumnIndex = numRows - 1 || 1;
	// col num where to push items
	let colNum = 0;

	while (letterNum < s.length) {
		if (!resultArr[colNum]) {
			resultArr[colNum] = [];
		}

		// identify whether entire column should be filled with numbers
		const isFullColumn = colNum === 0 || colNum % pushColumnIndex === 0;

		if (isFullColumn) {
			// fill entire column with numbers
			resultArr[colNum].push(...s.slice(letterNum, letterNum + numRows));
			letterNum += numRows;
		} else {
			const idxOfSingleLetterInRow =
				pushColumnIndex - (colNum % pushColumnIndex);

			for (let i = 0; i < numRows; i += 1) {
				let pushItem = i === idxOfSingleLetterInRow ? s[letterNum] : '';
				resultArr[colNum].push(pushItem);
			}

			letterNum += 1;
		}

		colNum += 1;
	}

	let resultString = '';
	for (let i = 0; i < numRows; i += 1) {
		for (let j = 0; j < resultArr.length; j += 1) {
			resultString += resultArr[j][i] || '';
		}
	}

	return resultString;
}

console.log(convert('PAYPALISHIRING', 4));
// console.log(convert('AB', 2));
// console.log(convert('ABCD', 3));
