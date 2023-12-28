function isAnagram(s: string, t: string): boolean {
	const map: { string: number } = t.split('').reduce((acc: any, curr: any) => {
		if (!(curr in acc)) {
			acc[curr] = 0;
		}
		acc[curr] += 1;
		return acc;
	}, {});

	for (let i = 0; i < s.length; i += 1) {
		if (!(s[i] in map) || map[s[i]] <= 0) {
			return false;
		}
		map[s[i]] -= 1;
	}

	for (let key in map) {
		if (map[key] > 0) {
			return false;
		}
	}

	return true;
}
