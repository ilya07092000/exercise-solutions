function isZeroArray(nums: number[], queries: number[][]): boolean {
  const dp = new Array(nums.length + 1).fill(0);

  for (const query of queries) {
    const [start, end] = query;

    dp[start] += -1;
    dp[end + 1] += 1;
  }

  let prefixSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    prefixSum += dp[i];

    const candidateResult = nums[i] + prefixSum;

    if (candidateResult > 0) {
      return false;
    }
  }

  return true;
}
