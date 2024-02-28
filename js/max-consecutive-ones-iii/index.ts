function longestOnes(nums: number[], k: number): number {
  let kAmount = k;
  let pointer1 = 0;
  let pointer2 = 0;
  let result = 0;

  let currWindow = 0;

  while (pointer2 < nums.length) {
    if (nums[pointer2] === 1) {
      currWindow += 1;
      pointer2 += 1;
    } else if (nums[pointer2] === 0 && kAmount > 0) {
      currWindow += 1;
      pointer2 += 1;
      kAmount -= 1;
    } else if (nums[pointer2] === 0 && kAmount <= 0) {
      while (pointer1 <= pointer2 && kAmount <= 0) {
        if (nums[pointer1] === 0) {
          kAmount += 1;
        }
        pointer1 += 1;
        currWindow -= 1;
      }
    }

    result = Math.max(result, currWindow);
  }

  return result;
}
