function maximalSquare(matrix: string[][]): number {
  const dp: number[][] = matrix.map(line => line.map(item => Number(item)));
  let result = 0;

  for (let row = 1; row < matrix.length; row += 1) {
    for (let col = 1; col < matrix[0].length; col += 1) {
      const currentValue = Number(matrix[row][col]);

      if (currentValue) {
        const minDp = Math.min(
          dp[row - 1][col],
          dp[row][col - 1],
          dp[row - 1][col - 1],
        );

        dp[row][col] = minDp + 1;
      }
    }
  }

  const max = Math.max(...dp.flat());

  return max * max;
}
