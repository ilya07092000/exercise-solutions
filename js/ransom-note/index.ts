function canConstruct(ransomNote: string, magazine: string): boolean {
	const lettersMap = magazine.split('').reduce((acc: any, curr: any) => {
		if (!(curr in acc)) {
			acc[curr] = 0;
		}
		acc[curr] += 1;

		return acc;
	}, {});

	for (let i = 0; i < ransomNote.length; i += 1) {
		const letter = ransomNote[i];
		if (!(letter in lettersMap) || lettersMap[letter] <= 0) {
			return false;
		}
		lettersMap[letter] -= 1;
	}

	return true;
}
