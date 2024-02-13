declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number,
): number[][] {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  const result = [];
  for (let i = 0; i < rowsCount; i += 1) {
    result.push([]);
  }

  for (let col = 0; col < colsCount; col += 1) {
    let startIdx = col * rowsCount;
    for (let row = 0; row < rowsCount; row += 1) {
      if (col % 2 === 0) {
        result[row][col] = this[startIdx + row];
      } else {
        result[row][col] = this[startIdx + rowsCount - row - 1];
      }
    }
  }

  return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
