function countSubarrays(nums: number[], k: number): number {
  const maxNum = Math.max(...nums);
  let maxNumOccurences = 0;
  let result = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right += 1) {
    const num = nums[right];

    if (num === maxNum) {
      maxNumOccurences += 1;
    }

    while (maxNumOccurences >= k) {
      if (nums[left] === maxNum) {
        maxNumOccurences -= 1;
      }

      left += 1;
      result += nums.length - right;
    }
  }

  return result;
}
