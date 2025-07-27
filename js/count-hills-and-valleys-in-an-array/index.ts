function countHillValley(nums: number[]): number {
  const uniqueNums = nums.reduce<number[]>((acc, curr) => {
    if (!acc.length || acc[acc.length - 1] !== curr) {
      acc.push(curr);
    }

    return acc;
  }, []);
  let result = 0;

  let prevEl = uniqueNums[0];
  let currEl = uniqueNums[1];
  let nextEl = uniqueNums[2];

  for (let i = 1; i < uniqueNums.length - 1; i += 1) {
    nextEl = uniqueNums[i + 1];

    // hill
    if (currEl > prevEl && currEl > nextEl) {
      result += 1;
    } else if (currEl < prevEl && currEl < nextEl) {
      // valley
      result += 1;
    }

    prevEl = currEl;
    currEl = nextEl;
  }

  return result;
}

// (i - 1) > i > (i + 1) - hill
// (i - 1) < i < (i + 1) - valley
