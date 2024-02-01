/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const targetZeroCols = [];
  const targetZeroRows = [];

  // traverse matrix and identify 0 cells indexes
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      const cell = matrix[row][col];
      if (cell === 0) {
        if (!targetZeroRows.includes(row)) {
          targetZeroRows.push(row);
        }

        if (!targetZeroCols.includes(col)) {
          targetZeroCols.push(col);
        }
      }
    }
  }

  if (!targetZeroCols.length || !targetZeroRows.length) {
    return;
  }

  targetZeroCols.forEach(colIdx => {
    matrix.forEach(row => {
      row[colIdx] = 0;
    });
  });

  targetZeroRows.forEach(rowIdx => {
    matrix[rowIdx].forEach((_, idx) => (matrix[rowIdx][idx] = 0));
  });
}
