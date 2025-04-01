function mostPoints(questions: number[][]): number {
  const dp = new Array(questions.length).fill(0);

  dp[dp.length - 1] = questions[questions.length - 1][0];

  for (let i = questions.length - 2; i >= 0; i -= 1) {
    const [points, power] = questions[i];
    const nextIndex = i + power + 1;

    if (nextIndex > questions.length - 1) {
      dp[i] = Math.max(questions[i][0], dp[i + 1]);
    } else {
      const newPossibleResult = points + dp[nextIndex];
      dp[i] = Math.max(newPossibleResult, dp[i + 1]);
    }
  }

  return Math.max(...dp);
}
