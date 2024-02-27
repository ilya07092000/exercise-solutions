function maxOperations(nums: number[], k: number): number {
  let result = 0;
  nums.sort((a, b) => a - b);

  let pointer1 = 0;
  let pointer2 = nums.length - 1;

  while (pointer1 < pointer2) {
    const sum = nums[pointer1] + nums[pointer2];
    if (sum === k) {
      pointer1 += 1;
      pointer2 -= 1;
      result += 1;
    } else if (sum > k) {
      pointer2 -= 1;
    } else {
      pointer1 += 1;
    }
  }

  return result;
}
