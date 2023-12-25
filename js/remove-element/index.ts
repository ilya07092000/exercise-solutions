function removeElement(nums: number[], val: number): number {
	let idx = 0;
	let arrayLength = nums.length;

	while (idx < arrayLength) {
		const num = nums[idx];

		if (num === val) {
			nums.splice(idx, 1);
			arrayLength -= 1;
		} else {
			idx += 1;
		}
	}

	return arrayLength;
}
