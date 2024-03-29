function firstMissingPositive(nums: number[]): number {
  let minNum = Number.MAX_SAFE_INTEGER;
  const numsMap = nums.reduce((acc, num) => {
    acc[num] = true;
    if (num >= 0) {
      minNum = Math.min(minNum, num);
    }
    return acc;
  }, {});

  if (minNum > 1) {
    return 1;
  }

  for (let i = minNum; i <= nums.length + 1; i += 1) {
    if (!(i in numsMap)) {
      return i;
    }
  }
}
