/**
 * ~45ms
 */
function maxProductDifference(nums: number[]): number {
	const maxPair = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
	const minPair = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

	nums.forEach((num) => {
		if (num > maxPair[0]) {
			maxPair[1] = maxPair[0];
			maxPair[0] = num;
		} else if (num > maxPair[1]) {
			maxPair[1] = num;
		}

		if (num < minPair[0]) {
			minPair[1] = minPair[0];
			minPair[0] = num;
		} else if (num < minPair[1]) {
			minPair[1] = num;
		}
	});

	return maxPair[0] * maxPair[1] - minPair[0] * minPair[1];
}
