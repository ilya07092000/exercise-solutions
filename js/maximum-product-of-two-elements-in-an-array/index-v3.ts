/**
 * O(n)
 * TIme - 52ms
 */

function maxProduct(nums: number[]): number {
	let maxNum1 = 0;
	let maxNum2 = 0;

	for (let num of nums) {
		if (num > maxNum1) {
			maxNum2 = maxNum1;
			maxNum1 = num;
		} else if (num > maxNum2) {
			maxNum2 = num;
		}
	}

	return (maxNum1 - 1) * (maxNum2 - 1);
}
