function wordBreak(s: string, wordDict: string[]): boolean {
  const memo = {};
  let final = false;

  const traverse = (word, idx, result) => {
    if (result.length === s.length) {
      final = result;
    }

    word += s[idx];

    if (!(word in memo) && word.length <= s.length) {
      traverse(word, idx + 1, result);
    }

    if (word in memo) {
      traverse('', idx + 1, result + word);
    } else if (wordDict.includes(word)) {
      traverse('', idx + 1, result + word);
      memo[word] = true;
    }
  };

  traverse('', 0, '');
  return final;
}
