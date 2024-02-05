function firstUniqChar(s: string): number {
  const lettersMap = s.split('').reduce((acc, letter) => {
    acc[letter] ??= 0;
    acc[letter] += 1;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];
    if (lettersMap[letter] === 1) {
      return i;
    }
  }

  return -1;
}
