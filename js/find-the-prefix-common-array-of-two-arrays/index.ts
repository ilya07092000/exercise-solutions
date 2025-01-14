function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const answer = [];
  const frequencyMap = {};

  for (let i = 0; i < A.length; i += 1) {
    const n1 = A[i];
    const n2 = B[i];
    let currentResult = 0;

    frequencyMap[n1] = (frequencyMap[n1] || 0) + 1;
    frequencyMap[n2] = (frequencyMap[n2] || 0) + 1;

    if (n1 === n2) {
      currentResult += 1;
    } else {
      if (frequencyMap[n1] === 2) {
        currentResult += 1;
      }

      if (frequencyMap[n2] === 2) {
        currentResult += 1;
      }
    }

    answer.push((answer[i - 1] || 0) + currentResult);
  }

  return answer;
}
