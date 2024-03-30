function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    product *= nums[right];

    while (product >= k && left <= right) {
      product /= nums[left];
      left += 1;
    }

    if (product < k) {
      result += right - left + 1;
    }
  }

  return result;
}
