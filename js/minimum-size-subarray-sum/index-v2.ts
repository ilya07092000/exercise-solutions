/**
 * 60ms
 *
 * two pointers
 *
 */

function minSubArrayLen(target: number, nums: number[]): number {
	let sum = 0;
	let result: number | null = null;

	let pointer1 = 0;
	let pointer2 = 0;

	while (pointer2 < nums.length) {
		sum += nums[pointer2];
		pointer2 += 1;

		while (sum >= target) {
			let length = pointer2 - pointer1;
			if (!result || result > length) {
				result = length;
			}

			sum -= nums[pointer1];
			pointer1 += 1;
		}
	}

	return result || 0;
}

export {};
