/**
 * 860ms
 */
function rotate(nums: number[], k: number): void {
	for (let i = 0; i < k; i += 1) {
		const el = nums.pop();
		nums.unshift(el);
	}
}
