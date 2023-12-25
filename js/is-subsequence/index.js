function isSubsequence(s: string, t: string): boolean {
	let appearances = 0;
	let symbolToCheck = s[appearances];

	for (let i = 0; i < t.length; i += 1) {
		if (t[i] === symbolToCheck) {
			appearances += 1;
			symbolToCheck = s[appearances];
		}
	}

	return appearances === s.length;
}
