const lettersMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return lettersMap[digits];
  }

  const traverse = (results, idx) => {
    // store candidates
    const candidates = [];
    // get letters by current digit idx
    const letters = lettersMap[digits[idx]];

    // iterate throught array of current results(candidates)
    for (let i = 0; i < results.length; i += 1) {
      // iterate through existing letters of current digit
      for (let j = 0; j < letters.length; j += 1) {
        // generate all possible combinations
        candidates.push(`${results[i]}${letters[j]}`);
      }
    }

    // return if we are on the last digit
    if (idx === digits.length - 1) {
      return candidates;
    } else {
      // otherwise make recursin with current candidates and increased index by 1
      return traverse(candidates, idx + 1);
    }
  };

  // start from the letters of the first digit
  return traverse([...lettersMap[digits[0]]], 1);
}
