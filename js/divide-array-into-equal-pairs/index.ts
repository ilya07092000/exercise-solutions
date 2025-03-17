function divideArray(nums: number[]): boolean {
  const division = nums.length / 2;

  const numsMap = nums.reduce((acc, curr) => {
    acc[curr] ??= 0;
    acc[curr] += 1;

    return acc;
  }, {});

  for (const num in numsMap) {
    if (numsMap[num] % 2 === 1) {
      return false;
    }
  }

  return true;
}
