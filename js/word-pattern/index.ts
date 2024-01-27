function wordPattern(pattern: string, s: string): boolean {
  const stringArray = s.split(' ');
  if (stringArray.length !== pattern.length) {
    return false;
  }

  const patternMap = {};
  for (let i = 0; i < pattern.length; i += 1) {
    const patternItem = pattern[i];
    const word = stringArray[i];
    const existingPattern = patternMap[patternItem];

    if (existingPattern && existingPattern !== word) {
      return false;
    } else if (!existingPattern) {
      if (Object.values(patternMap).includes(word)) {
        return false;
      }
      patternMap[patternItem] = word;
    }
  }

  return true;
}
