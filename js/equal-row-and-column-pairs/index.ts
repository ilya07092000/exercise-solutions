function equalPairs(grid: number[][]): number {
  const rowKeys = {};
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    let key = '';
    for (let j = 0; j < grid[i].length; j += 1) {
      key += `${grid[i][j]}-`;
    }

    if (key in rowKeys) {
      rowKeys[key] += 1;
    } else {
      rowKeys[key] = 1;
    }
  }

  for (let i = 0; i < grid[0].length; i += 1) {
    let key = '';
    for (let j = 0; j < grid.length; j += 1) {
      key += `${grid[j][i]}-`;
    }

    if (key in rowKeys) {
      result += rowKeys[key];
    }
  }

  return result;
}
