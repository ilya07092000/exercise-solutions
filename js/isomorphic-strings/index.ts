function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const mapFrom = {};
	const mapTo = {};

	for (let i = 0; i < s.length; i += 1) {
		const to = s[i];
		const from = t[i];

		if (!(from in mapFrom)) {
			mapFrom[from] = to;
		}

		if (!(to in mapTo)) {
			mapTo[to] = from;
		}

		if (mapFrom[from] !== to || mapTo[to] !== from) {
			return false;
		}
	}

	return true;
}
