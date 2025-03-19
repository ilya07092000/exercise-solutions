function minOperations(nums: number[]): number {
  let result = 0;

  let left = 0;
  let right = 2;

  while (right < nums.length) {
    if (nums[left] === 0) {
      for (let i = left; i <= right; i += 1) {
        nums[i] = nums[i] === 0 ? 1 : 0;
      }

      result += 1;
    }

    left += 1;
    right = left + 2;
  }

  return nums.every(item => item === 1) ? result : -1;
}
