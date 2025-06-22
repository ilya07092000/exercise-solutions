function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  let targetRowIndex = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    const rowStartNum = matrix[middle][0];
    const rowEndNum = matrix[middle][matrix[0].length - 1];

    if (target > rowEndNum) {
      left = middle + 1;
    } else if (target < rowStartNum) {
      right = middle - 1;
    } else {
      targetRowIndex = middle;
      break;
    }
  }

  left = 0;
  right = matrix[targetRowIndex].length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target > matrix[targetRowIndex][middle]) {
      left = middle + 1;
    } else if (target < matrix[targetRowIndex][middle]) {
      right = middle - 1;
    } else if (matrix[targetRowIndex][middle] === target) {
      return true;
    }
  }

  return false;
}
