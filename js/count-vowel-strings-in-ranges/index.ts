const vowels = new Set();
vowels.add('a');
vowels.add('e');
vowels.add('i');
vowels.add('o');
vowels.add('u');

const isValid = (word: string) =>
  vowels.has(word[0]) && vowels.has(word[word.length - 1]);

function vowelStrings(words: string[], queries: number[][]): number[] {
  const prefixSum = [isValid(words[0]) ? 1 : 0];

  for (let i = 1; i < words.length; i += 1) {
    const value = isValid(words[i]) ? 1 : 0;

    prefixSum.push(prefixSum[i - 1] + value);
  }

  const results = [];

  for (const range of queries) {
    const [start, end] = range;

    if (start === 0) {
      results.push(prefixSum[end]);
    } else {
      results.push(prefixSum[end] - prefixSum[start - 1]);
    }
  }

  return results;
}
