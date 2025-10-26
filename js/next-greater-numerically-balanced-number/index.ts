const max = 1224444;

const isBalanced = (used: number[]) => {
  return used.every((value, index) => value === 0 || value === index);
};

function nextBeautifulNumber(n: number): number {
  const result: number[] = [];
  const used = new Array(8).fill(0);

  const backtrack = (current?: number) => {
    if (current > max) {
      return;
    }

    if (isBalanced(used)) {
      result.push(current);
    }

    for (let i = 1; i <= 7; i += 1) {
      if (used[i] < i) {
        used[i] += 1;

        backtrack(current * 10 + i);

        used[i] -= 1;
      }
    }
  };

  backtrack(0);

  result.sort((a, b) => a - b);

  return result.find(number => number > n);
}
