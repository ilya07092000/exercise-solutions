/**
 * For every i in text1, j in text2, we will choose one of the following two options:
 * if two characters match, length of the common subsequence would be 1 plus the length of the common subsequence till the i-1 and j-1 indexes
 * if two characters doesn't match, we will take the longer by either skipping i or j indexes
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = [];

  for (let i = 0; i <= text1.length; i += 1) {
    dp.push(new Array(text2.length + 1).fill(0));
  }

  for (let i = 1; i <= text1.length; i += 1) {
    for (let j = 1; j <= text2.length; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}
