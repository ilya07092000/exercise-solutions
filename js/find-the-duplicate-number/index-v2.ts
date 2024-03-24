function findDuplicate(nums: number[]): number {
  let slowPointer = nums[0];
  let fastPointer = nums[nums[0]];

  while (fastPointer !== slowPointer) {
    slowPointer = nums[slowPointer];
    fastPointer = nums[nums[fastPointer]];
  }

  fastPointer = 0;
  while (fastPointer != slowPointer) {
    fastPointer = nums[fastPointer];
    slowPointer = nums[slowPointer];
  }
  return slowPointer;
}

export {};
