function checkIfExist(arr: number[]): boolean {
  const numsMap = {};

  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];

    const divided = arr[i] / 2;
    const multiplied = arr[i] * 2;

    if (numsMap[divided] !== undefined || numsMap[multiplied] !== undefined) {
      return true;
    }

    numsMap[el] = i;
  }

  return false;
}
