function candy(ratings: number[]): number {
  const result = new Array(ratings.length).fill(1);

  while (true) {
    let isInProgress = false;
    for (let i = 0; i < result.length - 1; i += 1) {
      if (ratings[i] > ratings[i + 1] && result[i] <= result[i + 1]) {
        result[i] += 1;
        isInProgress = true;
      }

      if (ratings[i] < ratings[i + 1] && result[i] >= result[i + 1]) {
        result[i + 1] += 1;
        isInProgress = true;
      }
    }

    if (!isInProgress) {
      return result.reduce((acc, curr) => acc + curr, 0);
    }
  }
}
