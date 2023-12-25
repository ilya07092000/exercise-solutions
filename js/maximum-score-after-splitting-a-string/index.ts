function maxScore(s: string): number {
	let ones = 0;
	let zeros = 0;

	let onesLeft = 0;

	let result = 0;

	for (let i = 0; i < s.length; i += 1) {
		if (+s[i] === 1) {
			ones += 1;
		}
	}
	onesLeft = ones;

	if (!ones) {
		return s.length - 1;
	}

	for (let i = 0; i < s.length - 1; i += 1) {
		if (+s[i] === 1) {
			onesLeft -= 1;
		} else {
			zeros += 1;
		}

		result = Math.max(result, zeros + onesLeft);
	}

	return result;
}
