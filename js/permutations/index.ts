function permute(nums: number[]): number[][] {
  const result = [];
  const stack = [];

  nums.forEach((num, idx) => {
    stack.push([[num], [num]]);
  });

  while (stack.length) {
    const [value, visited] = stack.pop();

    if (value.length !== nums.length) {
      nums.forEach(item => {
        if (!visited.includes(item)) {
          stack.push([
            [...value, item],
            [...visited, item],
          ]);
        }
      });
    } else {
      result.push(value);
    }
  }

  return result;
}
