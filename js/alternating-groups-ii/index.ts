function numberOfAlternatingGroups(colors: number[], k: number): number {
  let arrCopy = [...colors];

  for (let i = 0; i < k; i += 1) {
    arrCopy.push(colors[i]);
  }

  let left = 0;
  let right = 0;
  let result = 0;

  while (right < arrCopy.length - 1) {
    let length = right - left + 1;
    let isValid = arrCopy[right] !== arrCopy[right + 1];

    if (length === k) {
      result += 1;
      left += 1;
    }

    right += 1;

    if (!isValid) {
      left = right;
    }
  }

  return result;
}
