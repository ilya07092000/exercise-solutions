/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let depth = Math.floor(matrix.length / 2);

  for (let i = 0; i < depth; i += 1) {
    let start = i;
    let end = matrix.length - i - 2;

    for (let col = start; col <= end; col += 1) {
      const top = matrix[i][col];
      const right = matrix[col][end + 1];
      const bottom = matrix[matrix.length - i - 1][matrix.length - col - 1];
      const left = matrix[matrix.length - col - 1][start];

      matrix[col][end + 1] = top;
      matrix[matrix.length - i - 1][matrix.length - col - 1] = right;
      matrix[matrix.length - col - 1][start] = bottom;
      matrix[i][col] = left;
    }
  }
}
