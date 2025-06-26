function longestSubsequence(s: string, k: number): number {
  let length = 0;
  let value = 0;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (Number(s[i]) === 0) {
      length += 1;
      continue;
    }

    let n = s.length - 1 - i;
    let candidateValue = Math.pow(2, n);

    if (value + candidateValue <= k) {
      length += 1;
      value += candidateValue;
    }
  }

  return length;
}
