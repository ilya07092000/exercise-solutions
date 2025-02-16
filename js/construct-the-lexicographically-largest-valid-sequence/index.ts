function constructDistancedSequence(n: number): number[] {
  const desiredLength = n * 2 - 1;

  const backTrack = (result = [], used = {}, index = 0) => {
    let isIndexUsed = result[index];

    while (isIndexUsed && index < desiredLength - 1) {
      index += 1;
      isIndexUsed = result[index];
    }

    const isLastIndexUsed = desiredLength - 1 === index && result[index];

    if (isLastIndexUsed) {
      return result;
    }

    for (let candidateNum = n; candidateNum > 0; candidateNum -= 1) {
      if (candidateNum === 1 && !used[1]) {
        result[index] = candidateNum;
        used[1] = true;

        const candidateResult = backTrack(result, used, index);

        if (!candidateResult) {
          result[index] = null;
          used[1] = false;
        } else {
          return candidateResult;
        }
      } else if (
        index + candidateNum <= desiredLength - 1 &&
        !result[index + candidateNum] &&
        !used[candidateNum]
      ) {
        result[index] = candidateNum;
        result[index + candidateNum] = candidateNum;
        used[candidateNum] = true;

        const candidateResult = backTrack(result, used, index);

        if (!candidateResult) {
          result[index] = null;
          result[index + candidateNum] = null;
          used[candidateNum] = false;
        } else {
          return candidateResult;
        }
      }
    }
  };

  return backTrack();
}
