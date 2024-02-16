function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  let uniqueLettersAmount = 0;

  const numsMap: object = arr.reduce((acc, curr) => {
    if (!(curr in acc)) {
      acc[curr] = 0;
      uniqueLettersAmount += 1;
    }
    acc[curr] += 1;

    return acc;
  }, {});

  const occurences = Object.values(numsMap).sort((a, b) => a - b);
  let removed = 0;
  let idx = 0;

  while (removed < k) {
    const letterOccurences = occurences[idx];
    // calculate how many letters we can remove
    const rest = k - removed;

    // if have enough letters to remove then
    // increate remove with how many letters was removed
    // and decrement unique letters amount.
    // otherwise break the loop
    if (removed < k && letterOccurences <= rest) {
      removed += letterOccurences;
      uniqueLettersAmount -= 1;
    } else {
      break;
    }

    idx += 1;
  }

  return uniqueLettersAmount;
}
