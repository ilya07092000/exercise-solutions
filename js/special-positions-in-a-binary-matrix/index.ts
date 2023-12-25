function numSpecial(mat: number[][]): number {
	let result = 0;

	for (let r = 0; r < mat.length; r += 1) {
		const row = mat[r];
		const isSpecialRow = isSpecial(row);
		if (isSpecialRow) {
			const oneIdx = row.indexOf(1);
			const currColumn = mat.map((item) => item[oneIdx]);
			const isSpecialColumn = isSpecial(currColumn);
			if (isSpecialColumn) {
				result += 1;
			}
		}
	}

	return result;
}

const isSpecial = (row = []) => {
	let oneExist = false;

	for (let i = 0; i < row.length; i += 1) {
		if (row[i] === 1) {
			if (!oneExist) {
				oneExist = true;
			} else {
				return false;
			}
		}
	}

	return oneExist;
};
