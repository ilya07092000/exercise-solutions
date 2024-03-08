function maxFrequencyElements(nums: number[]): number {
  let result = 0;
  let max = 0;

  nums.reduce((acc, num) => {
    acc[num] ??= 0;
    acc[num] += 1;

    // reset result if we have greater value
    if (acc[num] > max) {
      result = 0;
    }

    max = Math.max(max, acc[num]);

    // update counter if current value is the max one
    if (acc[num] === max) {
      result += max;
    }

    return acc;
  }, {});

  return result;
}
