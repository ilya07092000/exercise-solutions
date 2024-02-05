function searchInsert(nums: number[], target: number): number {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (target === nums[middleIdx]) {
      return middleIdx;
    }

    if (target > nums[middleIdx]) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return leftIdx;
}
