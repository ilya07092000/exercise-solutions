function numIslands(grid: string[][]): number {
  let result = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      const item = grid[row][col];
      if (item === '1') {
        result += 1;
        const queue = [[row, col]];
        // mark as visited
        grid[row][col] = '2';
        while (queue.length) {
          const [y, x] = queue.shift();
          // move to top
          if (y > 0 && grid[y - 1][x] === '1') {
            queue.push([y - 1, x]);
            // mark as visited
            grid[y - 1][x] = '2';
          }

          // move to left
          if (x > 0 && grid[y][x - 1] === '1') {
            queue.push([y, x - 1]);
            // mark as visited
            grid[y][x - 1] = '2';
          }

          // move to bottom
          if (y < grid.length - 1 && grid[y + 1][x] === '1') {
            queue.push([y + 1, x]);
            // mark as visited
            grid[y + 1][x] = '2';
          }

          // move to right
          if (x < grid[0].length - 1 && grid[y][x + 1] === '1') {
            queue.push([y, x + 1]);
            // mark as visited
            grid[y][x + 1] = '2';
          }
        }
      }
    }
  }

  return result;
}
