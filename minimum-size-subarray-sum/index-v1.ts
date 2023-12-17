/**
 * 1034ms
 */

function minSubArrayLen(target: number, nums: number[]): number {
	let result;
	let isReachableTarget = false;

	for (let i = 0; i < nums.length; i += 1) {
		let sum = 0;
		isReachableTarget = false;

		for (let j = i; j < nums.length; j += 1) {
			sum += nums[j];
			if (sum >= target) {
				isReachableTarget = true;
				const length = j - i + 1;

				if (!result || result > length) {
					result = length;
				}
				break;
			}
		}

		if (!isReachableTarget) {
			return result || 0;
		}
	}

	return result || 0;
}

export {};
