function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  let startIndex = 0;
  let endIndex = 0;

  while (endIndex <= nums.length - k - 1) {
    const lastEl = nums[endIndex];
    const nextEl = nums[endIndex + 1];
    const length = endIndex - startIndex + 1;

    if (length === k) {
      let isValid = true;

      for (let i = 1; i < k; i += 1) {
        const curr = nums[endIndex + i + 1];
        const prev = nums[endIndex + i];

        if (curr <= prev) {
          isValid = false;
        }
      }

      if (isValid) {
        return true;
      }
    }

    if (nextEl > lastEl) {
      if (length === k) {
        startIndex += 1;
        endIndex += 1;
      } else {
        endIndex += 1;
      }
    } else {
      startIndex = endIndex;

      startIndex += 1;
      endIndex += 1;
    }
  }

  return false;
}
