function removeDuplicates(nums: number[]): number {
	// index of curr position for which we search the next unique element
	let result = 1;

	for (let i = 1; i < nums.length; i += 1) {
		// if curr element is not the same as previous (so it is unique)
		// then we set up it to current position and move to the next position
		if (nums[i] !== nums[i - 1]) {
			nums[result] = nums[i];
			result += 1;
		}
	}

	return result;
}
