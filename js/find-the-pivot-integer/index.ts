function pivotInteger(n: number): number {
  if (n === 1) {
    return 1;
  }

  /**
   * Constuct Array OF Sum from the left to the right
   */
  const leftSumArr = [1];
  for (let i = 1; i < n; i += 1) {
    leftSumArr.push(i + 1 + leftSumArr[i - 1]);
  }

  /**
   * Construct array of sum from the right to the left
   */
  const rightSumArr = [];
  rightSumArr[n - 1] = n;

  for (let i = n - 1; i > 0; i -= 1) {
    const sum = i + rightSumArr[i];
    rightSumArr[i - 1] = sum;

    // if sum of elements from the right on the same index is equal to the sum of elements from the left,
    // then return this number
    if (leftSumArr[i - 1] === sum) {
      return i;
    }
  }

  return -1;
}
