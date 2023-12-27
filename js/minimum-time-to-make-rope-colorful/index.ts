function minCost(colors: string, neededTime: number[]): number {
	let result = 0;
	let idx = 0;

	while (idx < colors.length) {
		if (colors[idx] === colors[idx + 1]) {
			let leftPointer = idx;
			let rightPointer = idx + 1;

			while (colors[leftPointer] === colors[rightPointer]) {
				if (neededTime[leftPointer] < neededTime[rightPointer]) {
					result += neededTime[leftPointer];
					leftPointer = rightPointer;
					rightPointer += 1;
				} else {
					result += neededTime[rightPointer];
					rightPointer += 1;
				}

				idx += 1;
			}
		} else {
			idx += 1;
		}
	}

	return result;
}
console.log(minCost('aabaa', [1, 2, 3, 4, 1])); // 2
console.log(minCost('bbbaaa', [4, 9, 3, 8, 8, 9])); // 23
console.log(minCost('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])); // 26
console.log(
	minCost('aaaaaaaaaaaaaa', [1, 3, 6, 5, 4, 5, 4, 4, 2, 8, 3, 10, 6, 6])
); // 57
