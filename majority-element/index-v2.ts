/**
 * if the candiateValue is reset to 0 by other elements, the majority element will eventually regain the lead.
 */

function majorityElement(nums: number[]): number {
	let candidate = nums[0];
	let candiateValue = 0;

	for (let i = 0; i < nums.length; i += 1) {
		if (candiateValue === 0) {
			candidate = nums[i];
		}

		if (candidate === nums[i]) {
			candiateValue += 1;
		} else {
			candiateValue -= 1;
		}
	}

	return candidate;
}
