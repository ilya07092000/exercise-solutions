function productExceptSelf(nums: number[]): number[] {
  // count all elements which are at the left of particular element
  const leftDp = new Array(nums.length);
  // count all elements which are at the right of particular element
  const rightDp = new Array(nums.length);
  // start with 1 since we do not have any elements at the left of the first element
  leftDp[0] = 1;
  // start with 1 since we do not have any elements at the right of the last element
  rightDp[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i += 1) {
    const leftEl = nums[i - 1];
    const rightEl = nums[nums.length - i];

    /**
     * use dp[i] to retrieve the previous memo result,
     * and multiply it by previous element
     */
    leftDp[i] = leftDp[i - 1] * leftEl;
    rightDp[nums.length - 1 - i] = rightDp[nums.length - i] * rightEl;
  }

  return leftDp.map((item, idx) => item * rightDp[idx]);
}
