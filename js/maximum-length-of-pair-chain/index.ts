function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(pairs.length).fill(1);

  for (let i = 0; i < pairs.length; i += 1) {
    const currPair = pairs[i];

    for (let j = 0; j < i; j += 1) {
      if (currPair[0] > pairs[j][1] && dp[j] >= dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return Math.max(...dp);
}
