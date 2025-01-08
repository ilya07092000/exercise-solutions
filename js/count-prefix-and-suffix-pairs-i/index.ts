const isPrefixAndSuffix = (smallerStr, biggerStr) => {
  const prefix = biggerStr.slice(0, smallerStr.length);
  const suffix = biggerStr.slice(biggerStr.length - smallerStr.length);

  return prefix === smallerStr && suffix === smallerStr;
};

function countPrefixSuffixPairs(words: string[]): number {
  let result = 0;

  for (let i = 0; i < words.length - 1; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      const w1 = words[i];
      const w2 = words[j];

      if (i === j || i > j || w1.length > w2.length) {
        continue;
      }

      if (isPrefixAndSuffix(w1, w2)) {
        result += 1;
      }
    }
  }

  return result;
}
