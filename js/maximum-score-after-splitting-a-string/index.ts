function maxScore(s: string): number {
  let zeros = 0;
  let ones = 0;
  let bestSoFar = 0;

  if (+s[0] === 0) {
    zeros += 1;
  }

  for (let i = 1; i < s.length; i += 1) {
    if (+s[i] === 1) {
      ones += 1;
    }
  }

  bestSoFar = zeros + ones;

  for (let i = 1; i < s.length - 1; i += 1) {
    if (+s[i] === 0) {
      zeros += 1;
    } else {
      ones -= 1;
    }

    bestSoFar = Math.max(zeros + ones, bestSoFar);
  }

  return bestSoFar;
}
