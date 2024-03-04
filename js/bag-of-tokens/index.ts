function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);

  let score = 0;
  let maxScore = 0;
  let smallestTokenIdx = 0;
  let biggestTokenIdx = tokens.length - 1;
  let currPower = power;

  while (smallestTokenIdx <= biggestTokenIdx) {
    let smallestToken = tokens[smallestTokenIdx];

    if (currPower >= smallestToken) {
      currPower -= smallestToken;
      smallestTokenIdx += 1;
      score += 1;
    } else if (currPower < smallestToken && score > 0) {
      let biggestToken = tokens[biggestTokenIdx];
      currPower += biggestToken;
      score -= 1;
      biggestTokenIdx -= 1;
    } else if (power < smallestToken && score <= 0) {
      return maxScore;
    }

    maxScore = Math.max(score, maxScore);
  }

  return maxScore;
}
