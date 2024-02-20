function minCostClimbingStairs(cost: number[]): number {
  const dp = [];
  dp[0] = cost[0];

  if (cost.length === 2) {
    return Math.min(...cost);
  }

  for (let i = 1; i < cost.length; i += 1) {
    const curr = cost[i];
    const prev = dp[i - 1];

    if (i === 1) {
      dp.push(curr);
    } else {
      dp.push(Math.min(curr + prev, curr + dp[i - 2]));
    }
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
}
