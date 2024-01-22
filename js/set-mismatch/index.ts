function findErrorNums(nums: number[]): number[] {
  const numsMap = nums.reduce((acc: any, curr) => {
    acc[curr] ??= 0;
    acc[curr] += 1;
    return acc;
  }, {});

  let duplicatedNum = 0;
  let desiredNum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let expectedNum = i + 1;
    if (!(expectedNum in numsMap)) {
      desiredNum = expectedNum;
    } else if (numsMap[expectedNum] > 1) {
      duplicatedNum = expectedNum;
    }

    if (desiredNum && duplicatedNum) {
      return [duplicatedNum, desiredNum];
    }
  }
}
