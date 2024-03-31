function maxSubarrayLength(nums: number[], k: number): number {
  let result = 0;
  let occurenceMap = {};
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    if (result >= nums.length - left) {
      break;
    }

    const num = nums[right];

    if (!(num in occurenceMap)) {
      occurenceMap[num] = 0;
    }
    occurenceMap[num] += 1;

    while (occurenceMap[num] > k) {
      occurenceMap[nums[left]] -= 1;
      left += 1;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
}
