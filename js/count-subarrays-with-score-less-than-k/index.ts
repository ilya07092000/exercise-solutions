function countSubarrays(nums: number[], k: number): number {
  let currentSum = 0;
  let count = 0;

  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < nums.length) {
    let currentLength = rightPointer - leftPointer + 1;
    currentSum += nums[rightPointer];

    let isValid = currentLength * currentSum < k;

    while (!isValid) {
      currentSum -= nums[leftPointer];
      leftPointer += 1;

      currentLength = rightPointer - leftPointer + 1;
      isValid = currentLength * currentSum < k;
    }

    if (isValid) {
      count += currentLength;
    }

    rightPointer += 1;
  }

  return count;
}
