/**
 * DFS solution
 */

function maxLength(arr: string[]): number {
  let result = 0;
  // make array of characters map.
  // it is needed because not all items are unique initially.
  // also I use it to check whether new word is valid
  const charactersListMap = arr.reduce((acc, word) => {
    const wordMap = getUniqueCharsMap(word);

    if (wordMap) {
      acc.push(wordMap);
    }
    return acc;
  }, []);

  for (let i = 0; i < charactersListMap.length; i += 1) {
    // save start index and possible solution
    const solutions = [[i, charactersListMap[i]]];

    while (solutions.length) {
      // grab index and solution
      const [idx, currentSolution] = solutions.pop();
      result = Math.max(result, Object.keys(currentSolution).length);

      for (let j = idx + 1; j < charactersListMap.length; j += 1) {
        const nextWord = charactersListMap[j];
        const solutionCandidate = {...currentSolution};

        // check whether we can contruct word with unique symbolsh
        if (isValidWord(solutionCandidate, nextWord)) {
          // make new word
          Object.assign(solutionCandidate, nextWord);
          result = Math.max(result, Object.keys(solutionCandidate).length);
          // push possible solution to stack
          solutions.push([j, solutionCandidate]);
        }
      }
    }
  }

  return result;
}

/**
 * return object with letters and occurences if all letters are unique,
 * otherwise return false
 */
const getUniqueCharsMap = word => {
  const wordMap = {};

  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i];
    if (letter in wordMap) {
      return false;
    } else {
      wordMap[letter] = true;
    }
  }

  return wordMap;
};

/**
 * check whether objects do not have similar keys
 */
const isValidWord = (map1, map2) => {
  for (let key in map1) {
    if (key in map2) {
      return false;
    }
  }
  return true;
};

console.log(maxLength(['a', 'abc', 'd', 'de', 'def']));
