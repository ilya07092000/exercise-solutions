/**
 * 1 - sum first col
 * 2 - sum first row
 * for the rest of cells sum min value either at the top or at the left
 */

function minPathSum(grid: number[][]): number {
  // sum first row
  for (let i = 1; i < grid[0].length; i += 1) {
    grid[0][i] += grid[0][i - 1];
  }

  // sum first col
  for (let i = 1; i < grid.length; i += 1) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < grid.length; i += 1) {
    const col = grid[i];

    for (let j = 1; j < col.length; j += 1) {
      let topValue = grid[i - 1][j];
      let leftValue = grid[i][j - 1];
      grid[i][j] += Math.min(topValue, leftValue);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
}
