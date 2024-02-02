function sequentialDigits(low: number, high: number): number[] {
  const result = [];

  for (let i = 1; i <= 9; i += 1) {
    let num = '';
    for (let j = i; j <= 9; j += 1) {
      num += j;

      if (+num >= low && +num <= high) {
        result.push(+num);
      }

      if (+num > high) {
        break;
      }
    }
  }

  return result.sort((a, b) => a - b);
}
