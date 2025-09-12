const maxDiffsCount = 1;

const canTransform = (word1, word2) => {
  let diffsCount = 0;

  for (let i = 0; i < word1.length; i += 1) {
    if (diffsCount > maxDiffsCount) {
      return false;
    }

    if (word1[i] !== word2[i]) {
      diffsCount += 1;
    }
  }

  return diffsCount <= maxDiffsCount;
};

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  const adjMap: Record<string, Set<string>> = {};

  const queue = [beginWord];
  let index = 0;
  let reachedEndWord = false;

  while (queue.length > index) {
    const word = queue[index];

    if (!adjMap[word]) {
      adjMap[word] = new Set();
    }

    for (let i = 0; i < wordList.length; i += 1) {
      const candidate = wordList[i];

      if (candidate !== word && canTransform(word, candidate)) {
        adjMap[word].add(candidate);
        queue.push(candidate);
        wordList.splice(i, 1);
        i -= 1;
      }
    }

    if (word === endWord) {
      reachedEndWord = true;
      break;
    }

    index += 1;
  }

  if (!reachedEndWord) {
    return 0;
  }

  const dfs = (path: string[]) => {
    const lastItemInPath = path[path.length - 1];

    if (lastItemInPath === beginWord) {
      return path.length;
    }

    for (const [vertex, neigbors] of Object.entries(adjMap)) {
      if (neigbors.has(lastItemInPath)) {
        path.push(vertex);
        const result = dfs(path);
        if (result) {
          return result;
        }
        path.pop();
      }
    }
  };

  return dfs([endWord]) || 0;
}
