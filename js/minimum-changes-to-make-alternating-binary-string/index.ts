function minOperations(s: string): number {
	let firstResult = 0;
	let secondResult = 0;

	let firstTracker = 0;
	let secondTracker = 1;

	for (let i = 0; i < s.length; i += 1) {
		if (+s[i] !== firstTracker) {
			firstResult += 1;
		}

		if (+s[i] !== secondTracker) {
			secondResult += 1;
		}

		firstTracker = firstTracker === 0 ? 1 : 0;
		secondTracker = secondTracker === 0 ? 1 : 0;
	}

	return Math.min(firstResult, secondResult);
}
