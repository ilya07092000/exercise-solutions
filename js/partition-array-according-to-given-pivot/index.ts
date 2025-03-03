function pivotArray(nums: number[], pivot: number): number[] {
  const left = [];
  const right = [];
  const pivots = [];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (num === pivot) {
      pivots.push(num);
    } else if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  return [...left, ...pivots, ...right];
}
