const makeWordMap = (word) =>
	word.split('').reduce((acc, curr) => {
		acc[curr] ??= 0;
		acc[curr] += 1;
		return acc;
	}, {});

function closeStrings(word1: string, word2: string): boolean {
	if (word1.length !== word2.length) {
		return false;
	}

	const word1Map = makeWordMap(word1);
	const word2Map = makeWordMap(word2);

	/**
	 * check whether letter present in the both strings
	 */
	for (let key in word1Map) {
		if (!(key in word2Map)) {
			return false;
		}
	}

	const word1List = Object.values(word1Map)
		.sort((a: any, b: any) => a - b)
		.join('');
	const word2List = Object.values(word2Map)
		.sort((a: any, b: any) => a - b)
		.join('');

	return word1List === word2List;
}
