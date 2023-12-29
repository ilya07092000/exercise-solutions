function longestConsecutive(nums: number[]): number {
	const elementsMap: Record<string, number> = {};
	let result = 0;
	nums.forEach((num) => (elementsMap[num] = num));

	for (let number in elementsMap) {
		if (!(+number - 1 in elementsMap)) {
			let currResult = 1;
			while (String(+number + currResult) in elementsMap) {
				currResult += 1;
			}
			result = Math.max(currResult, result);
		}
	}

	return result;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
