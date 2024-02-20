function uniquePaths(m: number, n: number): number {
  if (m === 1 && n === 1) {
    return 1;
  }

  const memo = {};

  const traverse = (row, col) => {
    if (row >= m || col >= n) {
      return 0;
    }

    if (row === m - 1 && col === n - 1) {
      return 1;
    }

    if (memo[`${row}-${col}`] > 0) {
      return memo[`${row}-${col}`];
    }

    memo[`${row}-${col}`] = traverse(row + 1, col) + traverse(row, col + 1);
    return memo[`${row}-${col}`];
  };

  traverse(0, 0);
  return memo['0-0'];
}
