function findDuplicate(nums: number[]): number {
  const sortedArr = new Array(nums.length);

  for (let i = 0; i < nums.length; i += 1) {
    const numIdx = nums[i] - 1;

    if (sortedArr[numIdx]) {
      return sortedArr[numIdx];
    }

    sortedArr[numIdx] = nums[i];
  }
}
