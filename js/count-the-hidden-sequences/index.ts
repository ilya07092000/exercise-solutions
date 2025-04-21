const FIXED_FIRST_NUM = 10;

function numberOfArrays(
  differences: number[],
  lower: number,
  upper: number,
): number {
  const result = [FIXED_FIRST_NUM - differences[0], FIXED_FIRST_NUM];

  let min = result[0] > result[1] ? result[1] : result[0];
  let max = result[0] > result[1] ? result[0] : result[1];

  for (let i = 1; i < differences.length; i += 1) {
    result.push(differences[i] + result[result.length - 1]);

    min = Math.min(result[result.length - 1], min);
    max = Math.max(result[result.length - 1], max);
  }

  const graphHeight = Math.abs(max - min);
  const availableHeight = Math.abs(lower - upper);

  if (graphHeight > availableHeight) {
    return 0;
  }

  return availableHeight - graphHeight + 1;
}
