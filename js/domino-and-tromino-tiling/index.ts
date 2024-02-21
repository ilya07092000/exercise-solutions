function numTilings(n: number): number {
  const MODULE = Math.pow(10, 9) + 7;
  const arr = [1, 2, 5];

  for (let i = 3; i < n; i += 1) {
    arr.push((arr[i - 1] * 2 + arr[i - 3]) % MODULE);
  }

  return arr[n - 1];
}
