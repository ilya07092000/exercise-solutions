function hIndex(citations: number[]): number {
  let result = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i += 1) {
    if (citations[i] > i) {
      result += 1;
    }
  }

  return result;
}
