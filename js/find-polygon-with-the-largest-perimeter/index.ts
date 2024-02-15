function largestPerimeter(nums: number[]): number {
  let result = 0;
  nums.sort((a, b) => a - b);

  const sumArray = [...nums];
  for (let i = 1; i < sumArray.length; i += 1) {
    sumArray[i] += sumArray[i - 1];
  }

  for (let i = 2; i < nums.length; i += 1) {
    const currSide = nums[i];
    const prevSidesSum = sumArray[i - 1];
    const currSideSum = sumArray[i];

    if (prevSidesSum > currSide) {
      result = currSideSum;
    }
  }

  return result || -1;
}
