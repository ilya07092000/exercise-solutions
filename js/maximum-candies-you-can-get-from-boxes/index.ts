function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[],
): number {
  const stack = [...initialBoxes];
  const visited = new Set();

  const collectedKeys = new Set<number>();
  const lockedBoxes = new Set();

  let result = 0;

  const processBox = (index: number) => {
    if (visited.has(index)) {
      return;
    }

    visited.add(index);

    result += candies[index];
    stack.push(...containedBoxes[index]);

    keys[index].forEach(item => collectedKeys.add(item));
  };

  while (stack.length) {
    const index = stack.shift();
    const isOpenedBox = status[index] === 1;

    if (isOpenedBox) {
      processBox(index);
    } else {
      lockedBoxes.add(index);
    }

    if (lockedBoxes.size && !stack.length) {
      for (const key of collectedKeys) {
        if (lockedBoxes.has(key) && !visited.has(key)) {
          processBox(key);

          lockedBoxes.delete(key);
          collectedKeys.delete(key);
        }
      }
    }
  }

  return result;
}
