function jump(nums: number[]): number {
	let result = 0;
	let lastReachablePoint: any = nums.length - 1;

	while (lastReachablePoint > 0) {
		let prevPoint;

		for (let i = lastReachablePoint - 1; i >= 0; i -= 1) {
			if (nums[i] + i >= lastReachablePoint) {
				prevPoint = i;
			}
		}

		if (typeof prevPoint !== 'number') {
			return 0;
		}

		lastReachablePoint = prevPoint;
		result += 1;
	}

	return result;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([0])); // 0
