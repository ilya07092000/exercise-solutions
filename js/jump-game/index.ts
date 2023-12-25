function canJump(nums: number[]): boolean {
	let lastReachPoint = nums.length - 1;

	while (lastReachPoint > 0) {
		let reachable = false;

		for (let i = lastReachPoint - 1; i >= 0; i -= 1) {
			if (i + nums[i] >= lastReachPoint) {
				lastReachPoint = i;
				reachable = true;
			}
		}

		if (!reachable) {
			return false;
		}
	}

	return true;
}
