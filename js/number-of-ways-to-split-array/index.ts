function waysToSplitArray(nums: number[]): number {
  let result = 0;
  const sum = nums.reduce<number>((acc, curr) => acc + curr, 0);

  let leftSideSum = 0;
  let rightSideSum;

  for (let i = 0; i < nums.length - 1; i += 1) {
    leftSideSum += nums[i];
    rightSideSum = sum - leftSideSum;

    if (leftSideSum >= rightSideSum) {
      result += 1;
    }
  }

  return result;
}
