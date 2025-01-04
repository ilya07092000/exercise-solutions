function countPalindromicSubsequence(s: string): number {
  const map = {};

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!(char in map)) {
      map[char] = {};
    }

    if (map[char].min === undefined) {
      map[char].min = i;
    } else {
      map[char].max = i;
    }
  }

  const unique = new Set();

  for (const letter in map) {
    const {min, max} = map[letter];

    if (min === undefined || max === undefined || max - min === 1) {
      continue;
    }

    for (let i = min + 1; i < max; i += 1) {
      unique.add(`${letter}${s[i]}${letter}`);
    }
  }

  return unique.size;
}
