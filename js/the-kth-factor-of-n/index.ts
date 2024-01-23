function kthFactor(n: number, k: number): number {
  let factors = 0;

  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factors += 1;
    }

    if (factors === k) {
      return i;
    }
  }

  return -1;
}
