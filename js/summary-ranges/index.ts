function summaryRanges(nums: number[]): string[] {
  const result = [];
  let idx = 0;

  while (idx < nums.length) {
    let startRangeIdx = idx;
    while (nums[idx + 1] - nums[idx] === 1) {
      idx += 1;
    }

    if (startRangeIdx === idx) {
      result.push(String(nums[idx]));
    } else {
      result.push(`${nums[startRangeIdx]}->${nums[idx]}`);
    }
    idx += 1;
  }

  return result;
}
