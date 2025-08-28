const diagonalIterator = (
  grid: number[][],
  callback: (diagonalIndex: number, i: number, j: number) => void,
) => {
  for (let i = grid.length - 1; i >= 0; i -= 1) {
    const indexShift = grid.length - i - 1;

    for (let j = 0; j < grid[0].length; j += 1) {
      const diagonalIndex = indexShift + j;

      callback(diagonalIndex, i, j);
    }
  }
};

function sortMatrix(grid: number[][]): number[][] {
  let diagonals: number[][] = [[]];

  diagonalIterator(grid, (index, i, j) => {
    if (!diagonals[index]) {
      diagonals[index] = [grid[i][j]];
    } else {
      diagonals[index].push(grid[i][j]);
    }
  });

  const middle = Math.ceil(diagonals.length / 2);

  diagonals.forEach((item, index) => {
    if (index + 1 <= middle) {
      item.sort((a, b) => b - a);
    } else {
      item.sort((a, b) => a - b);
    }
  });

  diagonalIterator(grid, (index, i, j) => {
    grid[i][j] = diagonals[index].pop();
  });

  return grid;
}

/**

  1 7 3
9 8 2
4 5 6

*/
