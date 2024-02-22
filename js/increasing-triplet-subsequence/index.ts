function increasingTriplet(nums: number[]): boolean {
  let n1 = Number.MAX_SAFE_INTEGER;
  let n2 = Number.MAX_SAFE_INTEGER;

  for (let num of nums) {
    if (num <= n1) {
      n1 = num;
    } else if (num <= n2) {
      n2 = num;
    } else {
      return true;
    }
  }

  return false;
}
