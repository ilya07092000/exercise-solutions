function reverseWords(s: string): string {
  const result = s
    .trim()
    .split(' ')
    .filter(item => !!item);
  const middle = Math.floor(result.length / 2);

  for (let i = 0; i < middle; i += 1) {
    const temp = result[i];
    result[i] = result[result.length - i - 1];
    result[result.length - i - 1] = temp;
  }

  return result.join(' ');
}
