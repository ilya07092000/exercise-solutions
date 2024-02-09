function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const dp = nums.map(item => [item]);

  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i];

    for (let j = i + 1; j < nums.length; j += 1) {
      const bigger = Math.max(currentNum, nums[j]);
      const smaller = Math.min(currentNum, nums[j]);

      if (bigger % smaller === 0) {
        const candidate = [...dp[i], nums[j]];
        if (candidate.length >= dp[j].length) {
          dp[j] = candidate;
        }
      }
    }
  }

  let maxIdx = 0;
  dp.forEach((arr, idx) => {
    if (arr.length >= dp[maxIdx].length) {
      maxIdx = idx;
    }
  });

  return dp[maxIdx];
}
