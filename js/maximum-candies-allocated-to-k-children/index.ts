function maximumCandies(candies: number[], k: number): number {
  const allCandies = candies.reduce((acc, curr) => acc + curr, 0);

  if (allCandies < k) {
    return 0;
  }

  const isValid = (candiesPerChild: number) => {
    const targetCandies = k * candiesPerChild;
    let currentCandiesAmount = 0;

    for (const pile of candies) {
      currentCandiesAmount += pile - (pile % candiesPerChild);

      if (currentCandiesAmount >= targetCandies) {
        return true;
      }
    }

    return false;
  };

  const maxCandiesInPile = Math.max(...candies);

  if (isValid(maxCandiesInPile)) {
    return maxCandiesInPile;
  }

  let left = 1;
  let right = maxCandiesInPile;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (isValid(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
