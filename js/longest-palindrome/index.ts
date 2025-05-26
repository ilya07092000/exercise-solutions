function longestPalindrome(s: string): number {
  const map = {};
  let result = 0;

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;

    if (map[char] % 2 === 0) {
      result += 2;
    }
  }

  const hasEven = Object.values(map).some(value => Number(value) % 2 === 1);

  if (hasEven) {
    result += 1;
  }

  return result;
}
