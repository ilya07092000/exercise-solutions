function longestCommonPrefix(strs: string[]): string {
  let result = '';
  if (!strs.length) {
    return '';
  }
  let idx = 0;

  while (idx < strs[0].length) {
    let candidate = strs[0][idx];

    for (let i = 1; i < strs.length; i += 1) {
      if (strs[i][idx] !== candidate) {
        return result;
      }
    }

    idx += 1;
    result += candidate;
  }

  return result;
}
