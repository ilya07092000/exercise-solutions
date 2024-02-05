function minWindow(s: string, t: string): string {
  if (s === t) {
    return s;
  }

  const targetStringMap = t.split('').reduce((acc, letter) => {
    acc[letter] ??= 0;
    acc[letter] += 1;
    return acc;
  }, {});

  let pointer1 = 0;
  let pointer2 = 0;

  let result = '';
  let candidateStr = '';
  let candidateStrMap = {};

  while (pointer2 < s.length) {
    const newLetter = s[pointer2];
    candidateStrMap[newLetter] ??= 0;
    candidateStrMap[newLetter] += 1;
    candidateStr += newLetter;

    while (
      compareStrings(candidateStrMap, targetStringMap) &&
      pointer1 <= pointer2
    ) {
      if (!result) {
        result = candidateStr;
      } else {
        result = result.length >= candidateStr.length ? candidateStr : result;
      }

      pointer1 += 1;
      const onDeleteLetter = candidateStr[0];
      if (candidateStrMap[onDeleteLetter] === 1) {
        delete candidateStrMap[onDeleteLetter];
      } else {
        candidateStrMap[onDeleteLetter] -= 1;
      }
      candidateStr = candidateStr.slice(1);
    }

    pointer2 += 1;
  }

  return result;
}

const compareStrings = (stringMap, target) => {
  for (let letter in target) {
    const occurences = target[letter];
    if (!(letter in stringMap) || stringMap[letter] < occurences) {
      return false;
    }
  }
  return true;
};
