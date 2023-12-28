function groupAnagrams(strs: string[]): string[][] {
	const hashMap: Record<string, string[]> = {};

	strs.forEach((str) => {
		const hash = str.split('').sort().join('');
		if (!(hash in hashMap)) {
			hashMap[hash] = [];
		}
		hashMap[hash].push(str);
	});

	const result: string[][] = Object.values(hashMap).reduce(
		(acc: any[], curr) => {
			acc.push(curr);
			return acc;
		},
		[]
	);

	return result;
}
