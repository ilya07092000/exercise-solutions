function minimumOperations(nums: number[]): number {
  let distinctElementsAmount = 0;

  const elementsMap = nums.reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 1;
      distinctElementsAmount += 1;
    } else {
      if (acc[el] === 1) {
        distinctElementsAmount -= 1;
      }

      acc[el] += 1;
    }

    return acc;
  }, {});

  if (distinctElementsAmount === nums.length) {
    return 0;
  }

  let operations = 0;
  let currentIndex = 0;

  while (currentIndex < nums.length) {
    operations += 1;

    const boundary = currentIndex + 3;
    const elementsRemaining = nums.length - boundary;

    for (let i = currentIndex; i < boundary; i += 1) {
      const el = nums[i];

      currentIndex += 1;
      elementsMap[el] -= 1;

      if (elementsMap[el] === 1) {
        distinctElementsAmount += 1;
      } else if (elementsMap[el] === 0) {
        distinctElementsAmount -= 1;
      }
    }

    if (distinctElementsAmount === elementsRemaining) {
      return operations;
    }
  }

  return operations;
}
