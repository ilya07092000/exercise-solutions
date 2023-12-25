function isPalindrome(s: string): boolean {
	const letters = s.match(/[A-Z0-9]/gi);

	if (!letters) {
		return true;
	}

	for (let i = 0; i < Math.floor(letters.length / 2); i += 1) {
		const leftLetter = letters[i].toLowerCase();
		const rightLetter = letters[letters.length - i - 1].toLowerCase();

		if (leftLetter != rightLetter) {
			return false;
		}
	}

	return true;
}
