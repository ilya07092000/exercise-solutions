/**
 * O(n^2)
 * Time - 62ms
 */

function maxProduct(nums: number[]): number {
	let result = 0;

	for (let i = 0; i < nums.length - 1; i += 1) {
		for (let j = i + 1; j < nums.length; j += 1) {
			const sum = (nums[i] - 1) * (nums[j] - 1);

			if (sum > result) {
				result = sum;
			}
		}
	}

	return result;
}

export {};
