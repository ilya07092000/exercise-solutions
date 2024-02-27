const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

function maxVowels(s: string, k: number): number {
  let result = 0;

  for (let i = 0; i < k; i += 1) {
    if (vowels[s[i]]) {
      result += 1;
    }
  }

  let pointer1 = 0;
  let pointer2 = k - 1;

  let currentWindow = result;
  while (pointer2 < s.length) {
    if (vowels[s[pointer1]]) {
      currentWindow -= 1;
    }
    pointer1 += 1;
    pointer2 += 1;

    if (vowels[s[pointer2]]) {
      currentWindow += 1;
    }

    result = Math.max(result, currentWindow);
  }

  return result;
}
