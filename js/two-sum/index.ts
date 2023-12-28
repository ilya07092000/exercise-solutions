function twoSum(nums: number[], target: number): number[] {
	const indexesMap = {};

	for (let i = 0; i < nums.length; i += 1) {
		const num = nums[i];
		const diff = target - num;

		if (diff in indexesMap) {
			return [indexesMap[diff], i];
		}

		indexesMap[num] = i;
	}

	return [];
}
