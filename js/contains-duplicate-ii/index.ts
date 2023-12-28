function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const indexesMap = {};

	for (let i = 0; i < nums.length; i += 1) {
		if (!(nums[i] in indexesMap)) {
			indexesMap[nums[i]] = i;
		} else if (Math.abs(i - indexesMap[nums[i]]) <= k) {
			return true;
		} else if (Math.abs(i - indexesMap[nums[i]]) > k) {
			indexesMap[nums[i]] = i;
		}
	}

	return false;
}
