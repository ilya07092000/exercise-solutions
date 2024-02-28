function longestSubarray(nums: number[]): number {
  let canDelete = true;

  let pointer1 = 0;
  let pointer2 = 0;
  let currentWindow = 0;
  let result = 0;

  while (pointer2 < nums.length) {
    if (nums[pointer2] === 1) {
      currentWindow += 1;
      pointer2 += 1;
    } else if (nums[pointer2] === 0 && canDelete) {
      pointer2 += 1;
      canDelete = false;
    } else if (nums[pointer2] === 0 && !canDelete) {
      while (!canDelete && pointer1 <= pointer2) {
        if (nums[pointer1] === 0) {
          canDelete = true;
        } else {
          currentWindow -= 1;
        }

        pointer1 += 1;
      }
    }

    result = Math.max(currentWindow, result);
  }

  return canDelete ? result - 1 : result;
}
