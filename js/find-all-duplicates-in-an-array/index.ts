function findDuplicates(nums: number[]): number[] {
  const duplicates = [];
  nums.reduce((acc, num) => {
    if (!(num in acc)) {
      acc[num] = 1;
      return acc;
    }

    acc[num] += 1;
    if (acc[num] === 2) {
      duplicates.push(num);
    }

    return acc;
  }, []);

  return duplicates;
}
