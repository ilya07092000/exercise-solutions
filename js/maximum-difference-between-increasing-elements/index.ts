function maximumDifference(nums: number[]): number {
  let leftNumber = nums[0];
  let rightNumber = nums[0];
  let result = -1;

  for (const num of nums) {
    if (num < leftNumber) {
      leftNumber = num;
      rightNumber = num;
    } else if (num > rightNumber) {
      rightNumber = num;
      result = Math.max(result, rightNumber - leftNumber);
    }
  }

  return result >= 0 ? result : -1;
}
