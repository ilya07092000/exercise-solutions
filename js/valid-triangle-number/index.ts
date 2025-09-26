function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let last = nums.length - 1; last >= 2; last -= 1) {
    let leftPointer = 0;
    let rightPointer = last - 1;

    while (leftPointer < rightPointer) {
      const twoSum = nums[leftPointer] + nums[rightPointer];

      if (twoSum > nums[last]) {
        const length = rightPointer - leftPointer;
        result += length;

        rightPointer -= 1;
      } else {
        leftPointer += 1;
      }
    }
  }

  return result;
}
