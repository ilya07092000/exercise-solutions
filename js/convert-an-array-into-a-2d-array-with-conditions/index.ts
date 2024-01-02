function findMatrix(nums: number[]): number[][] {
	const result: any[][] = [];
	const occurences: Record<string, number> = {};

	nums.forEach((num) => {
		let rowIdx;
		if (!(num in occurences)) {
			occurences[num] = 0;
		}
		occurences[num] += 1;
		rowIdx = occurences[num] - 1;

		// check whether row already exists
		if (result.length <= rowIdx) {
			result[rowIdx] = [];
		}
		result[rowIdx].push(num);
	});

	return result;
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
