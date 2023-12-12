function removeDuplicates(nums: number[]): number {
	// index of element
	let idx = 0;
	// number which we coun
	let currNum;
	// counter for corresponding number
	let currCounter;
	// final length of array. needed to not overiterate array since we delete elements
	let finalLength = nums.length;

	while (idx < finalLength) {
		const num = nums[idx];
		// reset number and counter for it
		if (num !== currNum) {
			currNum = num;
			currCounter = 0;
		}
		currCounter += 1;

		if (currCounter > 2) {
			// delete redundant el
			nums.splice(idx, 1);
			finalLength--;
		} else {
			// go to next el in case we did not reach the limit for curr number
			idx += 1;
		}
	}

	return finalLength;
}
