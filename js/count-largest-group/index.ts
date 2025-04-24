function countLargestGroup(n: number): number {
  const groups = {};
  let maxGroupLength = 0;
  let maxGroupCount = 0;

  for (let i = 1; i <= n; i += 1) {
    const digitsSum =
      String(i)
        .split('')
        .reduce((acc, s) => acc + Number(s), 0) - 1;

    if (!groups[digitsSum]) {
      groups[digitsSum] = 0;
    }

    groups[digitsSum] += 1;

    if (groups[digitsSum] === maxGroupLength) {
      maxGroupCount += 1;
    } else if (groups[digitsSum] > maxGroupLength) {
      maxGroupCount = 1;
      maxGroupLength = groups[digitsSum];
    }
  }

  return maxGroupCount;
}
