function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    const firstNum = nums[i];
    const targetSum = firstNum * -1;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const sum = nums[leftPointer] + nums[rightPointer];

      if (sum === targetSum) {
        result.push([nums[i], nums[leftPointer], nums[rightPointer]]);

        leftPointer += 1;
        rightPointer -= 1;

        while (
          nums[leftPointer] === nums[leftPointer - 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer += 1;
        }
      } else if (sum > targetSum) {
        rightPointer -= 1;
      } else {
        leftPointer += 1;
      }
    }
  }

  return result;
}
