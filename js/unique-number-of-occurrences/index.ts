function uniqueOccurrences(arr: number[]): boolean {
	const occurences = arr.reduce((acc, curr) => {
		acc[curr] ??= 0;
		acc[curr] += 1;
		return acc;
	}, {});

	const countOccurences = {};
	for (let key in occurences) {
		const amount = occurences[key];
		if (amount in countOccurences) {
			return false;
		}
		countOccurences[amount] = key;
	}

	return true;
}
