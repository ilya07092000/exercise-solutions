function rearrangeArray(nums: number[]): number[] {
  const result = [];
  const positiveArray = [];
  const negativeArray = [];

  for (let i = 0; i < nums.length; i += 1) {
    const number = nums[i];
    if (number >= 0) {
      positiveArray.push(number);
    } else {
      negativeArray.push(number);
    }
  }

  for (let i = 0; i < nums.length / 2; i += 1) {
    result.push(positiveArray[i]);
    result.push(negativeArray[i]);
  }

  return result;
}
