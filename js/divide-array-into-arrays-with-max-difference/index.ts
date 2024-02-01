function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i += 3) {
    let firstNum = nums[i];
    let lastNum = nums[i + 2];

    if (lastNum - firstNum > k) {
      return [];
    }

    result.push(nums.slice(i, i + 3));
  }

  return result;
}
