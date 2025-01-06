function minOperations(boxes: string): number[] {
  const result = [];

  for (let i = 0; i < boxes.length; i += 1) {
    let currentBoxResult = 0;

    for (let j = 0; j < boxes.length; j += 1) {
      if (i === j) {
        continue;
      }

      if (+boxes[j] === 1) {
        currentBoxResult += Math.abs(i - j);
      }
    }

    result.push(currentBoxResult);
  }

  return result;
}
