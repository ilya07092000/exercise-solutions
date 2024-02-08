function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  if (Math.sqrt(n) === Math.round(Math.sqrt(n))) {
    return 1;
  }

  const perfectNumsList = [];

  for (let i = 1; i <= n; i += 1) {
    const isValidSquareNumber = Math.sqrt(i) === Math.round(Math.sqrt(i));
    if (isValidSquareNumber) {
      perfectNumsList.push(i);
    }
  }

  // number
  for (let i = 1; i < dp.length; i += 1) {
    // candidate number
    for (let j = 0; j < perfectNumsList.length; j += 1) {
      if (i >= perfectNumsList[j]) {
        dp[i] = Math.min(dp[i], dp[i - perfectNumsList[j]] + 1);
      }
    }
  }

  return dp[dp.length - 1];
}
