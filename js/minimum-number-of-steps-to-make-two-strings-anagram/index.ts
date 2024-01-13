function minSteps(s: string, t: string): number {
	const firstStringMap = {};
	const secondStringMap = {};

	for (let i = 0; i < s.length; i += 1) {
		firstStringMap[s[i]] ??= 0;
		secondStringMap[t[i]] ??= 0;

		firstStringMap[s[i]] += 1;
		secondStringMap[t[i]] += 1;
	}

	let result = 0;

	for (let letter in firstStringMap) {
		if (!(letter in secondStringMap)) {
			result += firstStringMap[letter];
		} else if (firstStringMap[letter] > secondStringMap[letter]) {
			result += firstStringMap[letter] - secondStringMap[letter];
		}
	}

	return result;
}
