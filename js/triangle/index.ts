function minimumTotal(triangle: number[][]): number {
  for (let i = 1; i < triangle.length; i += 1) {
    const prevRow = triangle[i - 1];
    const currRow = triangle[i];

    for (let j = 0; j < currRow.length; j += 1) {
      let topValue = prevRow[j];
      let topLeftValue = prevRow[j - 1];

      if (topValue === undefined) {
        currRow[j] += topLeftValue;
      } else if (topLeftValue === undefined) {
        currRow[j] += topValue;
      } else {
        currRow[j] += Math.min(topValue, topLeftValue);
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}
