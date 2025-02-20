function checkValidGrid(grid: number[][]): boolean {
  const queue = [[0, 0]];
  let counter = 0;
  const visited = new Set();

  while (queue.length) {
    const oneStepMoves = [];
    const nextMove = queue.shift();

    const [row, col] = nextMove;

    if (visited.has(`${row}-${col}`)) {
      continue;
    }

    const value = grid[row][col];

    if (value === counter) {
      visited.add(`${row}-${col}`);
      counter += 1;
    }

    // top
    if (row - 2 >= 0) {
      // left
      if (col - 1 >= 0) {
        oneStepMoves.push([row - 2, col - 1]);
      }

      // right
      if (col + 1 < grid.length) {
        oneStepMoves.push([row - 2, col + 1]);
      }
    }

    // bottom
    if (row + 2 < grid.length) {
      if (col - 1 >= 0) {
        oneStepMoves.push([row + 2, col - 1]);
      }

      if (col + 1 < grid.length) {
        oneStepMoves.push([row + 2, col + 1]);
      }
    }

    // left
    if (col - 2 >= 0) {
      // top
      if (row - 1 >= 0) {
        oneStepMoves.push([row - 1, col - 2]);
      }

      // bottom
      if (row + 1 < grid.length) {
        oneStepMoves.push([row + 1, col - 2]);
      }
    }

    // right
    if (col + 2 < grid.length) {
      // top
      if (row - 1 >= 0) {
        oneStepMoves.push([row - 1, col + 2]);
      }

      // bottom
      if (row + 1 < grid.length) {
        oneStepMoves.push([row + 1, col + 2]);
      }
    }

    if (oneStepMoves.length) {
      const desiredNextStep = oneStepMoves.find(([row, col]) => {
        return grid[row][col] === counter;
      });

      if (desiredNextStep) {
        queue.push(desiredNextStep);
      }
    }
  }

  return counter === grid.length * grid.length;
}
