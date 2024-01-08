function lengthOfLIS(nums: number[]): number {
	// each number itself represents 1 increasing sequence
	const dp = new Array(nums.length).fill(1);

	for (let i = 0; i < nums.length; i += 1) {
		const currNum = nums[i];
		for (let j = 0; j < i; j += 1) {
			// check whether curr num bigger than prev
			// check whether this sequence is longest
			if (currNum > nums[j] && dp[j] >= dp[i]) {
				dp[i] = dp[j] + 1;
			}
		}
	}

	return Math.max(...dp);
}

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
