function isPalindrome(x: number): boolean {
	if (x < 0) {
		return false;
	}

	const numArr = x.toString().split('');

	for (let i = 0; i < Math.floor(numArr.length / 2); i += 1) {
		const left = numArr[i];
		const right = numArr[numArr.length - i - 1];

		if (left !== right) {
			return false;
		}
	}

	return true;
}
