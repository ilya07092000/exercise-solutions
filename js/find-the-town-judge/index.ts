function findJudge(n: number, trust: number[][]): number {
  if (n === 1) {
    return 1;
  }

  const trustFrom = {};
  const trustTo = {};

  trust.forEach(([a, b]) => {
    trustFrom[a] ??= 0;
    trustFrom[b] ??= 0;
    trustFrom[a] += 1;

    trustTo[b] ??= 0;
    trustTo[b] += 1;
  });

  for (let truster in trustFrom) {
    // person trusts nobody and all except himself trust him
    if (trustFrom[truster] === 0 && trustTo[truster] === n - 1) {
      return +truster;
    }
  }

  return -1;
}
