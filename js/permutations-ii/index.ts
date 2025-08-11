function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  const backtrack = (
    index = 0,
    currentArray: number[] = [],
    usedIndexes = new Set<number>(),
  ) => {
    if (currentArray.length === nums.length) {
      result.push([...currentArray]);

      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];

      if (
        (i > 0 && nums[i] === nums[i - 1] && !usedIndexes.has(i - 1)) ||
        usedIndexes.has(i)
      ) {
        continue;
      }

      currentArray.push(num);
      usedIndexes.add(i);

      backtrack(i, currentArray, usedIndexes);

      currentArray.pop();
      usedIndexes.delete(i);
    }
  };

  backtrack();

  return result;
}
