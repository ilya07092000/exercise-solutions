function subsetXORSum(nums: number[]): number {
  let result = 0;

  const backtrack = (index = 0, currentResult = 0) => {
    let updatedResult = currentResult ^ nums[index];
    result += updatedResult;

    for (let i = index; i < nums.length; i += 1) {
      if (i !== index) {
        backtrack(i, updatedResult);
      }
    }
  };

  nums.forEach((_, index) => backtrack(index));

  return result;
}
