function makeEqual(words: string[]): boolean {
	if (words.length === 1) {
		return true;
	}

	const lettersCount = words.reduce((acc, word) => {
		word.split('').forEach((letter) => (acc[letter] = (acc[letter] || 0) + 1));
		return acc;
	}, {});

	for (let count in lettersCount) {
		if (lettersCount[count] < words.length) {
			return false;
		}

		if (lettersCount[count] % words.length !== 0) {
			return false;
		}
	}

	return true;
}
