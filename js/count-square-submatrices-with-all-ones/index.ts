function countSquares(matrix: number[][]): number {
  const dp = matrix.map(row => [...row]);

  for (let row = 1; row < matrix.length; row += 1) {
    for (let column = 1; column < matrix[0].length; column += 1) {
      let topValue = dp[row - 1][column];
      let leftValue = dp[row][column - 1];
      let topDiagonalValue = dp[row - 1][column - 1];
      let currentValue = dp[row][column];

      if (currentValue !== 0) {
        const minValue = Math.min(topValue, leftValue, topDiagonalValue);

        dp[row][column] = minValue + 1;
      }
    }
  }

  return dp.reduce((acc, curr) => {
    acc += curr.reduce((sum, value) => sum + value, 0);

    return acc;
  }, 0);
}
