function combinationSum3(k: number, n: number): number[][] {
  const result = [];

  const traverse = (sum, used, startNum) => {
    if (used.length > k) {
      return;
    }

    if (sum > n) {
      return;
    }

    if (sum === n && used.length === k) {
      result.push(used);
      return;
    }

    for (let i = startNum; i <= 9; i += 1) {
      if (!used.includes(i)) {
        traverse(sum + i, [...used, i], i);
      }
    }
  };

  traverse(0, [], 1);
  return result;
}
