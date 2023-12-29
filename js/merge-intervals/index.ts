function merge(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0]);
	const result = [intervals[0]];

	for (let i = 1; i < intervals.length; i += 1) {
		const currInterval = intervals[i];
		const prevInterval = result[result.length - 1];

		if (currInterval[0] > prevInterval[1]) {
			result.push(currInterval);
		} else {
			prevInterval[1] = Math.max(currInterval[1], prevInterval[1]);
		}
	}

	return result;
}
